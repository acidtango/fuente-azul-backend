import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsNotEmpty } from 'class-validator'

export class ForgotPasswordRequestDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email!: string
}
