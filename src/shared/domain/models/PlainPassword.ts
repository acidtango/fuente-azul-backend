import * as crypto from 'crypto'
import { HashedPassword } from './HashedPassword'
import { ValueObject } from './hex/ValueObject'
import { Salt } from './Salt'

export class PlainPassword extends ValueObject {
  constructor(private readonly password: string) {
    super()
  }

  static fromPrimitives(password: string): PlainPassword {
    return new PlainPassword(password)
  }

  toHashed(salt: Salt) {
    const hash = crypto
      .pbkdf2Sync(this.password, salt.toPrimitives(), 1000, 64, 'sha512')
      .toString('hex')
    return new HashedPassword(hash)
  }
}
