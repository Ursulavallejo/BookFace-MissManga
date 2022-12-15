import http from '../MyApi'
import { CreateComment } from '../../interfaces/IComments'

const CommentService =  {

    createComment: (newComment: {}) => {
            return http.post('/comment', newComment)
    },

    searchByKey: (messageKey: {}) => {
        return http.post('/get/comments', messageKey)
    },

    deleteComment: (_id: string) => {
        return http.delete(`/delete/comment/${_id}`)
    },

    updateComment: (id: string, updatedText: {} ) => {
        return http.put(`/update/comment/${id}`, updatedText)
    }

}

export default CommentService