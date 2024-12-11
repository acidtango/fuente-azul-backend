import { randomUUID } from 'node:crypto'
import { UuidGenerator } from '../../../domain/services/UuidGenerator'

export class UuidGeneratorRandom implements UuidGenerator {
  private static uuidV4Regex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

  public static generate(): string {
    return randomUUID()
  }

  generate(): string {
    return UuidGeneratorRandom.generate()
  }

  static validate(uuid: string) {
    return UuidGeneratorRandom.uuidV4Regex.test(uuid)
  }
}
