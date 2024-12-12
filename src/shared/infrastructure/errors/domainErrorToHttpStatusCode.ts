import { HttpStatus } from '@nestjs/common'
import { DomainErrorCode } from '../../domain/errors/DomainErrorCode'

export const domainErrorToHttpStatusCode: Record<DomainErrorCode, number> = {
  [DomainErrorCode.AGGREGATE_ALREADY_CREATED_ERROR]: HttpStatus.BAD_REQUEST,
  [DomainErrorCode.USER_NOT_FOUND]: HttpStatus.NOT_FOUND,
}
