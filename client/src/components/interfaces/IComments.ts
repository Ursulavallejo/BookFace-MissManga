export interface CreateComment {
    text: string
    name: string
    messagekey: string
}

export interface ReadComment {
    _id: string
    text: string
    name: string
    messagekey: string
    createdAt: Date
    updatedAt: Date

}