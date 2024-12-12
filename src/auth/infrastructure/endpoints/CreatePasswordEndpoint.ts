import { Body, Controller, HttpStatus, Post } from '@nestjs/common'
import { EmailAddress } from '../../../shared/domain/models/EmailAddress'
import { DocumentationTag, Endpoint } from '../../../shared/infrastructure/decorators/Endpoint'
import { CreatePasswordForUser } from '../../application/use-cases/CreatePasswordForUser'
import { CreatePasswordRequestDto } from './dtos/CreatePasswordRequestDto'

@Controller('/v1/auth/set-password')
export class CreatePasswordEndpoint {
  constructor(private readonly createPassword: CreatePasswordForUser) {}

  @Endpoint({
    tag: DocumentationTag.AUTH,
    description: 'Sets the password for a existing user',
    status: HttpStatus.CREATED,
  })
  @Post()
  async execute(@Body() { email, plainPassword }: CreatePasswordRequestDto) {
    await this.createPassword.execute({
      email: EmailAddress.fromPrimitives(email),
      plainPassword: plainPassword,
    })
  }
}
