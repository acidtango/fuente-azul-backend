import { User, UserPrimitives } from '../../src/identity-access/domain/User'
import { UuidGeneratorRandom } from '../../src/shared/infrastructure/services/uuid-generator/UuidGeneratorRandom'
import { ALBERTO } from '../fixtures/users'
import { cloneDeep } from '../utils/cloneDeep'

export class UserBuilder {
  private static current: UserPrimitives = UserBuilder.cleanState()

  private static cleanState(): UserPrimitives {
    return {
      ...cloneDeep(ALBERTO),
      id: new UuidGeneratorRandom().generate(),
    }
  }

  private static reset() {
    UserBuilder.current = UserBuilder.cleanState()
  }

  static from(user: UserPrimitives | User) {
    UserBuilder.current = user instanceof User ? user.toPrimitives() : user

    return this
  }

  static withId(userId: string) {
    UserBuilder.current.id = userId

    return this
  }

  static withEmail(email: string) {
    UserBuilder.current.email = email

    return this
  }

  static withPassword(password: string, salt: string) {
    UserBuilder.current.password = password
    UserBuilder.current.salt = salt
  }

  static build(): User {
    const built = cloneDeep(UserBuilder.current)

    UserBuilder.reset()

    return User.create(built)
  }
}
