import { SET_POST, POST_SAVED } from './mutation-types'

export default {
    [SET_POST](state, post) {
        state.post = post
    },
    [POST_SAVED](state) {
        state.post = {}
    }
}