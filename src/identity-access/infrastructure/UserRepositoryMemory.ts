import { EmailAddress } from '../../shared/domain/models/EmailAddress'
import { UserRepository } from '../application/repositories/UserRepository'
import { UserNotFound } from '../domain/errors/UserNotFound'
import { User, UserPrimitives } from '../domain/User'

export class UserRepositoryMemory implements UserRepository {
  constructor(private readonly users: Map<string, UserPrimitives> = new Map()) {}

  async save(user: User): Promise<void> {
    const userPrimitives = user.toPrimitives()

    this.users.set(userPrimitives.id, userPrimitives)
  }

  async findByEmailOrFail(userEmail: EmailAddress): Promise<User> {
    const emailPrimitives = userEmail.toPrimitives()
    const user = this.asArray().find((u) => u.email === emailPrimitives)

    if (!user) throw new UserNotFound(emailPrimitives)

    return User.fromPrimitives(user)
  }

  async isRegistered(userEmail: EmailAddress): Promise<boolean> {
    const emailPrimitives = userEmail.toPrimitives()
    return this.asArray().some((u) => u.email === emailPrimitives)
  }

  private asArray() {
    return new Array(...this.users.values())
  }
}
