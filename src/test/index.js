console.log('Init script')

const Mermaid = require('./../index')({
  port: 8888,
  debug: false,
  test: false
})

console.log('Init plugins')

const debug   = require('./../../plugins/debug')
    , end     = require('./../../plugins/end')

;(async () => {
  console.log('Create instance')
  const extension = await Mermaid.ready()
  console.log('Instance', extension)

  extension.use(debug)
  extension.use(end)
})()
