import { UuidGeneratorRandom } from '../src/shared/infrastructure/services/uuid-generator/UuidGeneratorRandom'

expect.extend({
  toBeAnUuid(str: string) {
    const isValid = UuidGeneratorRandom.validate(str)

    return {
      message: () => `${str} is not a valid UUID`,
      pass: isValid,
    }
  },
})
