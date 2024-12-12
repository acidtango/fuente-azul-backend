import { Body, Controller, HttpStatus, Post } from '@nestjs/common'
import { DocumentationTag, Endpoint } from '../../../shared/infrastructure/decorators/Endpoint'
import { LoginRequestDto } from './dtos/LoginRequestDto'
import { LoginResponseDto } from './dtos/LoginResponseDto'

@Controller('/v1/identity-access/login')
export class UserLoginEndpoint {
  constructor() {}

  @Endpoint({
    tag: DocumentationTag.IDENTITY_ACCESS,
    description: 'Obtains JWT token for user',
    status: HttpStatus.OK,
    type: LoginResponseDto,
  })
  @Post()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async execute(@Body() body: LoginRequestDto) {}
}
