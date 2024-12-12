import { Global, Module } from '@nestjs/common'
import { Token } from './domain/services/Token'
import { CryptoNode } from './infrastructure/services/crypto/CryptoNode'

@Global()
@Module({
  imports: [],
  controllers: [],
  providers: [{ provide: Token.CRYPTO, useClass: CryptoNode }],
  exports: [Token.CRYPTO],
})
export class SharedModule {}
