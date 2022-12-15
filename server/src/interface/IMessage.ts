export interface Comment {
    username: string
    comment: string
}

export interface CreateMessage {
    username: string
    message: string
}

export interface ReadMessage {
    _id: number
    username: string
    message: string
    createdAt: Date
    updatedAt: Date
    comment: Comment[]
}