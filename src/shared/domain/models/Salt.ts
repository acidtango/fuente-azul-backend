import { ValueObject } from './hex/ValueObject'

export class Salt extends ValueObject {
  private constructor(private salt: string) {
    super()
  }

  static fromPrimitives(salt: string) {
    return new Salt(salt)
  }

  toPrimitives() {
    return this.salt
  }
}
