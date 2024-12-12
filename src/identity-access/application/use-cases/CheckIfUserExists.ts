import { Inject } from '@nestjs/common'
import { EmailAddress } from '../../../shared/domain/models/EmailAddress'
import { UseCase } from '../../../shared/domain/models/hex/UseCase'
import { Token } from '../../../shared/domain/services/Token'
import { UserRepository } from '../repositories/UserRepository'

export class CheckIfUserExists extends UseCase {
  constructor(@Inject(Token.USER_REPOSITORY) private readonly userRepository: UserRepository) {
    super()
  }

  async execute(email: EmailAddress) {
    return this.userRepository.isRegistered(email)
  }
}
