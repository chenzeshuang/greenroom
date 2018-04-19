let mutation = {
    serverToken(state, payload) {
        state.toke = payload

    },
    serverUser(state, payload) {
        state.username = payload
    }
}
export default mutation