import { DomainError } from '../../../shared/domain/errors/DomainError'
import { DomainErrorCode } from '../../../shared/domain/errors/DomainErrorCode'

export class UserAlreadyRegistered extends DomainError {
  constructor(email: string) {
    super(
      `The user with email ${email} already exists`,
      DomainErrorCode.AGGREGATE_ALREADY_CREATED_ERROR
    )
  }
}
