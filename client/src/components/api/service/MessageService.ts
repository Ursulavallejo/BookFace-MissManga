import http from '../MyApi'
import { CreateMessage } from '../../interfaces/IMessage'

const MessageService = {

    createMessage: (newMessage: CreateMessage) => {
        return http.post('/message', newMessage)
    },

    getAllMessages: () => {
        return http.get('/message')
    },

    deleteMessage: (id: string) => {
        return http.delete(`/message/${id}`)
    },

    updateMessage: (id: string, _newMessage: {}) => {
        return http.put(`/message/${id}`, _newMessage)
    }

}

export default MessageService