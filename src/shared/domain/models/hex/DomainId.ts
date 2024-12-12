import { UuidGeneratorRandom } from '../../../infrastructure/services/uuid-generator/UuidGeneratorRandom'

export class DomainId {
  static uuidGenerator = new UuidGeneratorRandom()

  constructor(private readonly id: string) {}

  generate() {
    return DomainId.uuidGenerator.generate()
  }

  equals(other: DomainId) {
    return this.id === other.id
  }

  toPrimitives() {
    return DomainId.toPrimitives(this)
  }

  static toPrimitives(id: DomainId) {
    return id.id
  }

  toString() {
    return this.id
  }
}
