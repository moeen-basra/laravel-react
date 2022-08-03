import { Moment } from "moment"
import Article from "../modules/article/Article"

type ModelProps = {
    id?: string | number,
    createdAt?: string,
    updatedAt?: string,
    deletedAt?: string
}

type UserProps = {
    name: string
    email: string
    phone: string
    about?: string
} & ModelProps

type ArticleProps = {
    slug: string,
    title: string,
    description: string,
    content: string,
    publishedAt?: string,
    user?: UserProps
} & ModelProps


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

type ArticlesState = {
    data: Article[],
    pagination: PagingationInterface
}

type AuthObject = {
    tokenType: string,
    expiresIn: number
    accessToken: string,
    refershToken: string,
}

type AuthState = {
    isAuthenticated: boolean,
    isInitialised: boolean,
    auth: ?AuthObject,
    user: ?UserInterface
}

type MyCallback = () => void;