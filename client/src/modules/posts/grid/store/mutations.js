import { SET_POSTS } from './mutation-types'

export default {
    [SET_POSTS](state, posts) {
        state.posts = posts
    }
}