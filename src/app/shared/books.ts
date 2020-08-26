export interface IBooks{
    id: number,
    title: string,
    description: string,
    authorId: number,
    author: {
        id: number,
        firstName: string,
        lastName: string
    }
}