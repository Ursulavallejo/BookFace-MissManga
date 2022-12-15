export interface CreateMessage {
    username: string | null
    message: string

}

export interface ReadMessage {
    _id: string
    username: string
    message: string,
    createdAt: Date,
    updatedAt: Date
}