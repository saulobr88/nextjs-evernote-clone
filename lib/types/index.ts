export interface IUser {
    id:number,
    name:string,
    email: string
}

export interface IPost {
    id:number,
    title:string,
    content:string,
    authorId: number,
    author?: IUser,
    createdAt: Date
}

export interface IPostCreate {
    title:string,
    content:string,
    authorId: number,
}