import { UserInterface } from '../../types'
import Model from '../../utils/Model'
import { ModelProps } from '../../utils/Model'


type UserProps = {
  name: string
  email: string
  phone: string
  about: string
} & ModelProps


export class User extends Model implements UserInterface {

  name: string
  email: string
  phone: string
  about: string


  constructor(props: UserProps) {
    super(props)

    this.initialize(props)

    this.name = props.name || ''
    this.email = props.email || ''
    this.phone = props.phone || ''
    this.about = props.about || ''
  }
}

export default User
