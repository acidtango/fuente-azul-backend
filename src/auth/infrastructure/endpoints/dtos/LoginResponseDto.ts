import { ApiProperty } from '@nestjs/swagger'

export class LoginResponseDto {
  @ApiProperty()
  id!: string

  @ApiProperty()
  token!: string
}
