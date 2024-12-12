import { Body, Controller, HttpStatus, Post } from '@nestjs/common'
import { DocumentationTag, Endpoint } from '../../../shared/infrastructure/decorators/Endpoint'
import { CheckIfUserExistsRequestDto } from './dtos/CheckIfUserExistsRequestDto'

@Controller('/v1/identity-access/forgot-password')
export class ForgotPasswordEndpoint {
  constructor() {}

  @Endpoint({
    tag: DocumentationTag.IDENTITY_ACCESS,
    description: 'Sends reset password email',

    status: HttpStatus.OK,
  })
  @Post()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async execute(@Body() body: CheckIfUserExistsRequestDto) {}
}
