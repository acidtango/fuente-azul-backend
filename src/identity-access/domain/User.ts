import { EmailAddress } from '../../shared/domain/models/EmailAddress'
import { HashedPassword } from '../../shared/domain/models/HashedPassword'
import { AggregateRoot } from '../../shared/domain/models/hex/AggregateRoot'
import { Primitives } from '../../shared/domain/models/hex/Primitives'
import { PlainPassword } from '../../shared/domain/models/PlainPassword'
import { Salt } from '../../shared/domain/models/Salt'
import { UserId } from './UserId'

type UserProps = {
  id: UserId
  email: EmailAddress
  password: HashedPassword
  salt: Salt
}

type UserCreateParams = {
  email: string
  plainPassword: string
  salt: string
}

export type UserPrimitives = Primitives<User>

export class User extends AggregateRoot {
  private constructor(private props: UserProps) {
    super()
  }

  static create(p: UserCreateParams) {
    const salt = Salt.fromPrimitives(p.salt)

    return new User({
      id: UserId.generate(),
      email: EmailAddress.fromPrimitives(p.email),
      password: PlainPassword.fromPrimitives(p.plainPassword).toHashed(salt),
      salt,
    })
  }

  setPassword(plainPassword: string, salt: string) {
    this.props.salt = Salt.fromPrimitives(salt)
    this.props.password = PlainPassword.fromPrimitives(plainPassword).toHashed(this.props.salt)
  }

  toPrimitives() {
    return {
      id: this.props.id.toPrimitives(),
      email: this.props.email.toPrimitives(),
      password: this.props.password.toPrimitives(),
      salt: this.props.salt.toPrimitives(),
    }
  }

  static fromPrimitives(p: UserPrimitives) {
    const salt = Salt.fromPrimitives(p.salt)

    return new User({
      id: UserId.fromPrimitives(p.id),
      email: EmailAddress.fromPrimitives(p.email),
      password: PlainPassword.fromPrimitives(p.password).toHashed(salt),
      salt,
    })
  }
}
