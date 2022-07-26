import { Moment } from "moment"

export interface ModelInterface {
    [key: string]: any
    id?: string | number
    createdAt?: Moment
    updatedAt?: Moment
    deletedAt?: ?Moment

    toJs(): {}

    getDateString(date: Moment): string
}

export interface UserInterface extends ModelInterface {
    name: ?string
    email: ?string
    phone: ?string
    about: ?string
}

export interface ArticleInterface extends ModelInterface {
    slug: ?string,
    title: ?string,
    description: ?string,
    content: ?string,
    publishedAt: ?Moment,

    user?: UserInterface
}

export interface PagingationInterface {
    currentPage: number,
    from: number,
    lastPage: number,
    nextPageUrl: ?string,
    path: string,
    perPage: number,
    prevPageUrl: ?strong,
    to: number,
    total: number,
}

export type ArticlesState = {
    data: ArticleInterface[],
    pagination: PagingationInterface
}

export type AuthObject = {
    accessToken: string,
    tokenType: string
}

export type AuthState = {
    isAuthenticated: boolean,
    isInitialised: boolean,
    auth: ?AuthObject,
    user: ?UserInterface
}