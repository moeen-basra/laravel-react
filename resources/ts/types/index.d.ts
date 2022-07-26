import { Moment } from "moment"

export interface ModelInterface {
    [key: string]: any
    id?: string | number
    createdAt?: undefined | Moment
    updatedAt?: undefined | Moment
    deletedAt?: undefined | Moment

    toJs(): {}

    getDateString(date: Moment): string
}

export interface UserInterface extends ModelInterface {
    name: string|undefined
    email: string|undefined
    phone: string|undefined
    about: string|undefined
}

export interface ArticleInterface extends ModelInterface {
    slug: string|undefined,
    title: string|undefined,
    description: string|undefined,
    content: string|undefined,
    publishedAt: Moment|undefined,

    user?: UserInterface
}

export interface PagingationInterface {
    currentPage: number,
    from: number,
    lastPage: number,
    nextPageUrl: string|undefined,
    path: string,
    perPage: number,
    prevPageUrl: strong|undefined,
    to: number,
    total: number,
}

export type ArticlesState = {
    data: ArticleInterface[],
    pagination: PagingationInterface
}

export type AuthState = {
    isAuthenticated: boolean,
    resetPassword: boolean
}