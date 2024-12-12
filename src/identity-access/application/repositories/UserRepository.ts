import { EmailAddress } from '../../../shared/domain/models/EmailAddress'
import { User } from '../../domain/User'

export interface UserRepository {
  save(user: User): Promise<void>
  findByEmailOrFail(userEmail: EmailAddress): Promise<User>
  isRegistered(userEmail: EmailAddress): Promise<boolean>
}
