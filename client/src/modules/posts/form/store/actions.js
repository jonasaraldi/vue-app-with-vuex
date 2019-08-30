import postServices from '@/services/postServices'
import { SET_POST, POST_SAVED } from './mutation-types'

export default {
    edit({ commit, state }) {
        postServices
            .save(state.post)
            .then(() => commit(POST_SAVED))
    },
    save({ commit, state, dispatch }) {
        dispatch('setPost', {
            ...state.post,
            date: new Date().toJSON()
        })

        return postServices
            .save(state.post)
            .then(() => commit(POST_SAVED))
    },
    setPost({ commit }, post) {
        commit(SET_POST, post)
    }
}