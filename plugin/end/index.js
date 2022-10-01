module.exports = ({ fetch, debug }) => {
  fetch.usePost(({ noMessage }) => {
    debug && console.log('There are raw http messages, this warning is not a critical error')
    noMessage()
  })
}
