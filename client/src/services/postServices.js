import axios from 'axios'
import { urlBase } from '@/config'

const uriBase = `${ urlBase }/posts`

export default {
    fetch() {
        return axios.get(uriBase)
    },
    save(post) {
        return axios.post(uriBase, post)
    }
}