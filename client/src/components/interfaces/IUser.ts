export interface CreateUser {
    username: string;
    password:string;
    email:string;
    active:boolean;
  
   
}

export interface CreateUserObject {
    username: string
    password: string
}

export interface ReadUser {
    _id: string
    username: string
    password: string
    email: string
    active: boolean
    createdAt: Date
    updatedAt: Date

}