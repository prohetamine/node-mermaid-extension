module.exports = ({ fetch, test }) => {
  let n = 0;

  fetch.usePost('/events', ({ event, parseBase64, sendMessageSocket, nextPlugin }) => {
    /*if (event.isParsedEvent) {
      console.log(event.platform, 'parse event:', event.parseEvent, event.parseEvent.isModel, event.parseEvent.username, parseBase64(event.parseEvent.message))
    } else {
      console.log(event.platform, 'pure event: ', parseBase64(event.pureEvent))
    }*/
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

    /*
      contextId: '9999-9999-9999',
      id: 1,
      socketType: 'message',
      hashId: 'ashdsdhfhfsdhdhedhasd',
      platform: 'bongacams',
      modelUsername: 'username',
      pureEvent: 'base64',
      isParsedEvent: true,
      parseEvent: {
        isModel: false,
        isUser: false,
        isAnon: false,
        isNotice: false,
        isToken: false,
        isRoomCount: false,
        isRemovedMessage: false,
        isDisconnect: false,
        isConnect: false,
        isBan: false,
        tokenCount: 0,
        message: "base64",
        tokenMessage: "base64",
        username: "",
        roomCount: 0,
        user: 'base64',
        model: 'base64',
        notice: 'base64'
      }
    */

    nextPlugin()
  })
}
