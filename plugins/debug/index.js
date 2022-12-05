module.exports = ({ fetch, test }) => {
  let n = 0;

  fetch.usePost('/events', ({ event, parseBase64, sendMessageSocket, nextPlugin }) => {
    n++

    console.log(`--------------- #${n} ---------------`)
    console.log(``)
    console.log(`contextId: ${event.contextId}`)
    console.log(`id: ${event.id}`)
    console.log(`hashId: ${event.hashId}`)
    console.log(`platform: ${event.platform}`)
    console.log(`modelUsername: ${event.modelUsername}`)
    console.log(`pureEvent:`, parseBase64(event.pureEvent))
    console.log(`isParsedEvent: ${event.isParsedEvent}`)
    if (event.isParsedEvent) {
      console.log('parseEvent:')
      console.log(` isModel: ${event.parseEvent.isModel}`)
      console.log(` isUser: ${event.parseEvent.isUser}`)
      console.log(` isAnon: ${event.parseEvent.isAnon}`)
      console.log(` isNotice: ${event.parseEvent.isNotice}`)
      console.log(` isToken: ${event.parseEvent.isToken}`)
      console.log(` isRoomCount: ${event.parseEvent.isRoomCount}`)
      console.log(` isRemovedMessage: ${event.parseEvent.isRemovedMessage}`)
      console.log(` isDisconnect: ${event.parseEvent.isDisconnect}`)
      console.log(` isConnect: ${event.parseEvent.isConnect}`)
      console.log(` isBan: ${event.parseEvent.isBan}`)
      console.log(` tokenCount: ${event.parseEvent.tokenCount}`)
      console.log(` message: ${parseBase64(event.parseEvent.message, { decode: 'string' })}`)
      console.log(` tokenMessage: ${event.parseEvent.tokenMessage}`)
      console.log(` username: ${event.parseEvent.username}`)
      console.log(` roomCount: ${event.parseEvent.roomCount}`)
      console.log(` user:`, parseBase64(event.parseEvent.user))
      console.log(` model:`, parseBase64(event.parseEvent.model))
      console.log(` notice:`, parseBase64(event.parseEvent.notice))
    }
    console.log(``)

    nextPlugin()
  })
}
