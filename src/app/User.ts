export interface User {
    _id?: string,
    name: string,
    age: number,
    password?: string

}

export interface Users {
    usersList: User[]
}