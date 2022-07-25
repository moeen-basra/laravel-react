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
    name: string
    email: string
    phone: string
    about: string
}