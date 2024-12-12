import { ApiProperty } from '@nestjs/swagger'

export class CheckIfUserExistsResponseDto {
  @ApiProperty()
  exists!: boolean
}
