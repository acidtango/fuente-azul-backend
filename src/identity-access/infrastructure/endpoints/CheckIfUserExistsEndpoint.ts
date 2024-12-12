import { Body, Controller, HttpStatus, Post } from '@nestjs/common'
import { EmailAddress } from '../../../shared/domain/models/EmailAddress'
import { DocumentationTag, Endpoint } from '../../../shared/infrastructure/decorators/Endpoint'
import { CheckIfUserExists } from '../../application/use-cases/CheckIfUserExists'
import { CheckIfUserExistsRequestDto } from './dtos/CheckIfUserExistsRequestDto'
import { CheckIfUserExistsResponseDto } from './dtos/CheckIfUserExistsResponseDto'

@Controller('/v1/identity-access/check-user')
export class CheckIfUserExistsEndpoint {
  constructor(private readonly checkIfExists: CheckIfUserExists) {}

  @Endpoint({
    tag: DocumentationTag.IDENTITY_ACCESS,
    description: 'Check if user is registered',
    type: CheckIfUserExistsResponseDto,
    status: HttpStatus.OK,
  })
  @Post()
  async execute(@Body() body: CheckIfUserExistsRequestDto): Promise<CheckIfUserExistsResponseDto> {
    return { exists: await this.checkIfExists.execute(EmailAddress.fromPrimitives(body.email)) }
  }
}
