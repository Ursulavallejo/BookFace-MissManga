import dotenv from 'dotenv'
import { model, Schema } from 'mongoose'
import { CreateUser } from '../interface/IUser'

dotenv.config()
const dbCollection = process.env.MONGODB_COLLECTION_USERS


const UserSchema = new Schema<CreateUser>({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        required: true
    }
    
}, {
    timestamps: true
})

const UserModel = model<CreateUser>(dbCollection, UserSchema)

export default UserModel
