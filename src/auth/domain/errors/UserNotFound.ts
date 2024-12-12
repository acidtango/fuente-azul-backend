import { DomainError } from '../../../shared/domain/errors/DomainError'
import { DomainErrorCode } from '../../../shared/domain/errors/DomainErrorCode'

export class UserNotFound extends DomainError {
  constructor(email: string) {
    super(`The user with email ${email} does not exists`, DomainErrorCode.USER_NOT_FOUND)
  }
}
