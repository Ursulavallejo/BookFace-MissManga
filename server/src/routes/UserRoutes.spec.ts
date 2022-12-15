import Chai from 'chai'
import chaiHttp from 'chai-http'
import server from '../server'
import { ReadUser } from "../interface/IUser";
import Logger from '../utils/Logger'
import StatusCode from '../utils/StatusCode'
import { describe, it as test } from "mocha";

Chai.should()
Chai.use(chaiHttp)
const expect = Chai.expect

const randomString = Math.random().toString(36).substring(7)
Logger.debug(randomString)

const newUser = {
    username: 'Carin',
    password: '1111',
    email: 'test@test.se'
}

let createdUser: ReadUser

let global_id = ''

const updatedUser = {
    username: 'Ursula',
    password: '2222',
    email: 'test1@test1.se'
}

const createUser = () => {
    describe('Create user', () => {
        it('should create new user', (done) => {
            Chai.request(server)
                .post(`/user/`)
                .send(newUser)
                .then((response) => {
                    expect(response).to.have.a.status(StatusCode.CREATED)



                    global_id = response.body._id

                    done()
                })
        })
    })
}

const getAllUsers = () => {
    describe('Testing to get an array of users', () => {
        test('Should get an array of users', (done) => {
            Chai.request(server)
                .post('/user/active')
                .end((error, response) => {
                    expect(response).to.have.a.status(StatusCode.OK)

                    const body = response.body
                    expect(body).to.be.an('array')
                    expect(body.length).to.equal(body.length)

                    done()
                })
        })
    })
}

const checkThatUserDoNotExist = () => {
    describe('Check that user do not exist', () => {
        test('Should return 404', (done) => {
            Chai.request(server)
                .post(`/user/name/${updatedUser.username}`)
                .end((error, response) => {
                    expect(response.status).to.equal(StatusCode.NOT_FOUND)

                    done()
                })
        })
    })
}

const getUserWithId = () => {
    describe('Testing to get an existing user using id', () => {
        test('Should return an array of users', (done) => {
            Chai.request(server)
                .post(`/user/${global_id}`)
                .end((error, response) => {
                    expect(response).to.have.a.status(StatusCode.OK)

                    const body = response.body
                    expect(body).to.be.an('object')
                    expect(body.length).to.equal(body.length)

                    expect(response.body.username).to.equal('Carin')
                    // expect(response.body.password).to.equal('1111')
                    expect(response.body.email).to.equal('test@test.se')

                    done()
                })
        })
    })
}

const updateUserById = () => {
    describe('Testing to update message using id', () => {
        test('Should update message', (done) => {
            Chai.request(server)
                .put(`/user/${global_id}`)
                .send(updatedUser)
                .end((error, response) => {
                    expect(response).to.have.a.status(StatusCode.OK)

                    const body = response.body
                    expect(body).to.be.an('object')
                    expect(body.length).to.equal(body.length)

                    expect(response.body.username).to.equal('Ursula')
                    // expect(response.body.password).to.equal(2222)
                    expect(response.body.email).to.equal('test1@test1.se')

                    done()
                })
        })
    })
}

const deleteUserById = () => {
    describe('Testing to delete a message using id', () => {
        test('Should delete the message', (done) => {
            Chai.request(server)
                .delete(`/user/${global_id}`)
                .end((error, response) => {
                    expect(response.status).to.equal(StatusCode.OK)
                    expect(response.body.message).to.equal(`User with id: ${global_id} was deleted from database!`)

                    done()
                })
        })
    })
}

describe('Testing user routes', () => {
    createUser()
    getAllUsers()
    checkThatUserDoNotExist()
    getUserWithId()
    updateUserById()
    deleteUserById()
})