import { Inject } from '@nestjs/common'
import { EmailAddress } from '../../../shared/domain/models/EmailAddress'
import { UseCase } from '../../../shared/domain/models/hex/UseCase'
import { Crypto } from '../../../shared/domain/services/Crypto'
import { Token } from '../../../shared/domain/services/Token'
import { UserRepository } from '../repositories/UserRepository'

export type CreatePasswordForUserParams = {
  email: EmailAddress
  plainPassword: string
}

export class CreatePasswordForUser extends UseCase {
  constructor(
    @Inject(Token.USER_REPOSITORY) private readonly userRepository: UserRepository,
    @Inject(Token.CRYPTO) private readonly crypto: Crypto
  ) {
    super()
  }

  async execute(params: CreatePasswordForUserParams) {
    const user = await this.userRepository.findByEmailOrFail(params.email)

    const salt = await this.crypto.generateSalt()
    user.setPassword(params.plainPassword, salt)

    await this.userRepository.save(user)
  }
}
