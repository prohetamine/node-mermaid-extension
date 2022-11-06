const express           = require('express')
    , app               = express()
    , http              = require('http')
    , server            = http.createServer(app)
    , cors              = require('cors')
    , path              = require('path')
    , bodyParser        = require('body-parser')
    , { Server }        = require('socket.io')
    , base64            = require('base-64');

const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
})

app.use(cors())
app.use(bodyParser.json())
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  next()
})

global.set_default_delay = 700

const sendMessageSocket = (path, message) => io.sockets.emit(path, [{ text: message, delay: set_default_delay }])
    , sendMessagesSocket = (path, messages) => io.sockets.emit(path, messages.map(message => ({ text: message, delay: set_default_delay })))

const parseBase64 = data => {
  try {
    return JSON.parse(base64.decode(data))
  } catch (e) {
    return ''
  }
}
const useHttp = (path = null, callback = null) => {
  const isPath = typeof(path) == 'string' ? path : null

  const handler = (req, res, next) => {
    let event = null

    if (req.method.toLowerCase() === 'post' && Object.keys(req.body).length > 0) {
      event = req.body
    }

    if (req.method.toLowerCase() === 'get' && Object.keys(req.query).length > 0) {
      event = req.query
    }

    const func = {
      req,
      res,
      next,
      event,
      sendMessageSocket,
      sendMessagesSocket,
      parseBase64,
      nextPlugin: () => next(),
      sendMessage: message => res.send(JSON.stringify([{ text: message, delay: set_default_delay }])),
      sendMessages: messages => res.send(JSON.stringify(messages.map(message => ({ text: message, delay: set_default_delay })))),
      noMessage: () => res.send(JSON.stringify([]))
    }

    if (Object.keys(req.query).length > 0 || Object.keys(req.body).length > 0) {
      if (callback instanceof Function) {
        callback(func)
      } else {
        path(func)
      }
    } else {
      next()
    }
  }

  if (isPath) {
    app.use(path, handler)
  } else {
    app.use(handler)
  }
}

const fetch = {
        ...app,
        usePost: useHttp,
        useGet: useHttp
      }
    , static = {
        use: (path, dirname) => app.use(path, express.static(dirname))
      }
    , sendRawSocket = (path, data) => io.sockets.emit(path, data)
    , socket = {
      ...io,
      use: callback =>
        io.on('connection', page => {
          page.use = page.on
          callback(page)
        })
    }

module.exports = ({ port = 8888, test = false, debug = false } = { port: 8888, test: false, debug: false }) => ({
  ready: () =>
    new Promise(
      res =>
        server.listen(port, () => {
          const pluginFunc = {
            fetch,
            static,
            socket,
            sendRawSocket,
            sendMessageSocket,
            sendMessagesSocket,
            parseBase64,
            debug,
            test
          }

          const func = {
            use: plugin => plugin(pluginFunc)
          }
          res(func)
        })
    )
})
