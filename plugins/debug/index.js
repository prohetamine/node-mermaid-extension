module.exports = ({ fetch, test }) =>
  fetch.usePost('/events', ({ event, parseBase64, sendMessageSocket, nextPlugin }) => {
    /*if (event.isParsedEvent) {
      console.log(event.platform, 'parse event:', event.parseEvent, event.parseEvent.isModel, event.parseEvent.username, parseBase64(event.parseEvent.message))
    } else {
      console.log(event.platform, 'pure event: ', parseBase64(event.pureEvent))
    }*/


    console.log(event)

    nextPlugin()
  })
