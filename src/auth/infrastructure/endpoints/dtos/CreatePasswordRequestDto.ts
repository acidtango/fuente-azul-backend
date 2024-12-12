import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsNotEmpty, IsString } from 'class-validator'

export class CreatePasswordRequestDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email!: string

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  plainPassword!: string
}
