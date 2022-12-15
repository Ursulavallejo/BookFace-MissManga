import { Express } from "express"
import MessageController from "../controllers/MessageController";

const MessageRoutes = (server: Express) => {

    server.get('/message', MessageController.getAllMessages)
    server.get('/message/:id', MessageController.getMessageById)

    server.post('/message', MessageController.createMessage)

    server.put('/message/:id', MessageController.updateMessageById)

    server.delete('/message/:id', MessageController.deleteMessageById)
}

export default MessageRoutes
