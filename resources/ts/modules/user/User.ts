import { UserProps } from '../../types'
import Model from '../../utils/Model'

export class User extends Model {

  name: string
  email: string
  phone: string
  about?: string


  constructor(props: UserProps) {
    super(props)

    this.name = props.name
    this.email = props.email
    this.phone = props.phone
    this.about = props.about
  }
}

export default User
