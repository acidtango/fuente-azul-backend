import { DomainId } from '../../shared/domain/models/hex/DomainId'

export class UserId extends DomainId {
  static generate() {
    return UserId.fromPrimitives(DomainId.uuidGenerator.generate())
  }

  static fromPrimitives(id: string) {
    return new UserId(id)
  }
}
