import { Module } from '@nestjs/common'
import { Token } from '../shared/domain/services/Token'
import { CheckIfUserExists } from './application/use-cases/CheckIfUserExists'
import { CreatePasswordForUser } from './application/use-cases/CreatePasswordForUser'
import { CheckIfUserExistsEndpoint } from './infrastructure/endpoints/CheckIfUserExistsEndpoint'
import { CreatePasswordEndpoint } from './infrastructure/endpoints/CreatePasswordEndpoint'
import { ForgotPasswordEndpoint } from './infrastructure/endpoints/ForgotPasswordEndpoint'
import { UserLoginEndpoint } from './infrastructure/endpoints/UserLoginEndpoint'
import { UserRepositoryMemory } from './infrastructure/UserRepositoryMemory'

@Module({
  imports: [],
  controllers: [
    CheckIfUserExistsEndpoint,
    CreatePasswordEndpoint,
    ForgotPasswordEndpoint,
    UserLoginEndpoint,
  ],
  providers: [
    CreatePasswordForUser,
    CheckIfUserExists,
    { provide: Token.USER_REPOSITORY, useClass: UserRepositoryMemory },
  ],
})
export class IdentityAccessModule {}
