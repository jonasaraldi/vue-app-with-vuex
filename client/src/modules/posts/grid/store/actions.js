import postServices from '@/services/postServices'
import { SET_POSTS } from './mutation-types'

export default {
    fetchPosts({ commit, state }) {
        postServices
            .fetch(state.filtro)
            .then(({ data }) => commit(SET_POSTS, data));
    }
}