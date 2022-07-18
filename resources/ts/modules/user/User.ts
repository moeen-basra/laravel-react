import Model from '../../utils/Model'

export interface UserInterface {
  name: string,
  email: string,
  phone: string,
  about: string
}

export class User extends Model<UserInterface> {

  name: string
  email: string
  phone: string
  about: string


  constructor(props: any) {
    super(props)

    this.initialize(props)

    this.name = props.name || ''
    this.email = props.email || ''
    this.phone = props.phone || ''
    this.about = props.about || ''
  }

  initialize(props: any) {
    super.initialize(props)
  }
}

export default User
