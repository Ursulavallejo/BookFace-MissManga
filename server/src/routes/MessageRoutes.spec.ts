import Chai from 'chai'
import chaiHttp from 'chai-http'
import server from '../server'
import { ReadMessage } from "../interface/IMessage";
import Logger from '../utils/Logger'
import StatusCode from '../utils/StatusCode'
import { describe, it as test } from "mocha";

Chai.should()
Chai.use(chaiHttp)
const expect = Chai.expect

const randomString = Math.random().toString(36).substring(7)
Logger.debug(randomString)

const newMessage = {
    username: "Carin",
    message: "Test"
}

let createdMessage: ReadMessage

let global_id = ''

const updatedMessage = {
    username: "Michaela",
    message: "Updated message"
}

const createMessage = () => {
    describe('Create message', () => {
        it('should create new message', (done) => {
            Chai.request(server)
                .post(`/message`)
                .send(newMessage)
                .then((response) => {
                    expect(response).to.have.a.status(StatusCode.CREATED)
                    expect(response.body.message).to.equal('Test')

                    global_id = response.body._id

                    done()
                })
        })
    })
}

const getAllMessages = () => {
    describe('Testing to get an array of messages', () => {
        test('Should get an array of messages', (done) => {
            Chai.request(server)
                .get('/message')
                .end((error, response) => {
                    expect(response).to.have.a.status(StatusCode.OK)

                    const body = response.body
                    expect(body).to.be.an('array')
                    expect(body.length).to.equal(body.length)

                    const message = body[0]
                    expect(message).to.be.an('object')
                    expect(message.message).to.equal('Test')

                    done()
                })
        })
    })
}

const checkThatMessageDoNotExist = () => {
    describe('Check that message do not exist', () => {
        test('Should return 404', (done) => {
            Chai.request(server)
                .get(`/${randomString}`)
                .end((error, response) => {
                    expect(response.status).to.equal(StatusCode.NOT_FOUND)

                    done()
                })
        })
    })
}

const getMessageWithId = () => {
    describe('Testing to get an existing message using id', () => {
        test('Should return an array of messages', (done) => {
            Chai.request(server)
                .get(`/message/${global_id}`)
                .end((error, response) => {
                    expect(response.status).to.equal(StatusCode.OK)

                    const body = response.body
                    expect(body).to.be.an('object')
                    expect(body.message).to.equal('Test')

                    done()
                })
        })
    })
}

const updateMessageById = () => {
    describe('Testing to update message using id', () => {
        test('Should update message', (done) => {
            Chai.request(server)
                .put(`/message/${global_id}`)
                .send(updatedMessage)
                .end((error, response) => {
                    expect(response.status).to.equal(StatusCode.OK)

                    const body = response.body
                    expect(body.message).to.equal('Updated message')

                    done()
                })
        })
    })
}

const deleteMessageById = () => {
    describe('Testing to delete a message using id', () => {
        test('Should delete the message', (done) => {
            Chai.request(server)
                .delete(`/message/${global_id}`)
                .end((error, response) => {
                    expect(response.status).to.equal(StatusCode.OK)
                    expect(response.body.message).to.equal(`Message with id: ${global_id} was deleted from database!`)

                    done()
                })
        })
    })
}

describe('Testing message routes', () => {
    createMessage()
    getAllMessages()
    checkThatMessageDoNotExist()
    getMessageWithId()
    updateMessageById()
    deleteMessageById()
})