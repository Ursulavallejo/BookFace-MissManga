import Logger from '../utils/Logger'
import StatusCode from "../utils/StatusCode";
import { Request, Response } from 'express'
import MessageModel from "../models/MessageModel";
import { CreateMessage, ReadMessage } from "../interface/IMessage";

const createMessage = async (req: Request, res: Response) => {
    try {
        Logger.info('createMessage()')
        Logger.http('req.body' + req.body)
        const {message, username} = req.body
        if (message && username) {
            const newObject: CreateMessage = {
                username: username,
                message: message,
             
            }
            Logger.http('newObject' + newObject)

            const newMessage = new MessageModel(newObject)
            const dbResponse = await newMessage.save()
            Logger.http('dbResponse' + dbResponse)
            res.status(StatusCode.CREATED).send(dbResponse)

        } else {
            Logger.error('message failed')
            res.status(StatusCode.BAD_REQUEST).send({
                message: 'Incorrect body'
            })
        }
    } catch (error) {
        Logger.error('error' + error)
        res.status(StatusCode.BAD_REQUEST).send({
            error: 'Error while creating message'
        })
    }
}

const getAllMessages = (req: Request, res: Response) => {
    try {

        MessageModel.find({} , '', (error: ErrorCallback, messages: Array<ReadMessage>) => {
            if (error) {
                Logger.error(error)
                res.status(StatusCode.BAD_REQUEST).send({
                    error: 'Error getting messages'
                })
            } else {
                Logger.http(messages)
                res.status(StatusCode.OK).send(messages)
            }
        })
    } catch (error) {
        Logger.error(error)
        res.status(StatusCode.BAD_REQUEST).send({
            error: 'Error getting messages'
        })
    }
}

const getMessageById = (req: Request, res: Response) => {
    try {
        MessageModel.findById(req.params.id, '', (error: ErrorCallback, message: ReadMessage) => {
            if (error) {
                Logger.error('error' + error)
                res.status(StatusCode.BAD_REQUEST).send({
                    error: 'Error getting message'
                })
            } else {
                Logger.http('message' + message)
                res.status(StatusCode.OK).send(message ? message : {
                    message: `Message with id '${ req.params.id }' not found`
                })
            }
        })
    } catch (error) {
        Logger.error('error' + error)
        res.status(StatusCode.BAD_REQUEST).send({
            error: 'Error getting message by Id'
        })
    }
}

interface IUpdatedMessage {
    message: string
}


const updateMessageById = (req: Request, res: Response) => {
    try {
        Logger.debug('req.params.id' + req.params.id)
        Logger.debug('req.body' + req.body)
        const updatedMessage: IUpdatedMessage = {
            message: req.body.message
        }
        Logger.debug('updatedMessage' + updatedMessage)

        MessageModel.findByIdAndUpdate(req.params.id, updatedMessage, {new : true }, (error, message: ReadMessage) => {
            if (error) {
                Logger.error('error' + error)
                res.status(StatusCode.BAD_REQUEST).send({
                    error: 'Error updating message'
                })
            } else {
                Logger.http('message' + message)
                res.status(StatusCode.OK).send(message ? message : {
                    message: `Message with id '${ req.params.id }' not found`
                })
            }
        })
    } catch (error) {
        Logger.error('error' + error)
        res.status(StatusCode.BAD_REQUEST).send({
            error: 'Error updating message'
        })
    }
}

const deleteMessageById = (req: Request, res: Response) => {
    try {
        MessageModel.findByIdAndRemove(req.params.id, (error: ErrorCallback, message: ReadMessage) => {
            if (error) {
                Logger.error('error' + error)
                res.status(StatusCode.BAD_REQUEST).send({
                    error: 'Error deleting message'
                })
            } else {
                Logger.http('message' + message)
                res.status(StatusCode.OK).json(
                    message ? {
                            message: `Message with id: ${ req.params.id } was deleted from database!`
                        }
                        : {
                            message: `Message with id '${ req.params.id }' not found`
                        })
            }
        })
    } catch (error) {
        Logger.error('error' + error)
        res.status(StatusCode.BAD_REQUEST).send({
            error: 'Error deleting message'
        })
    }
}



export default {
    createMessage,
    getAllMessages,
    getMessageById,
    updateMessageById,
    deleteMessageById
}