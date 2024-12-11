import { Token } from '../../../domain/services/Token'
import { Global, Module } from '@nestjs/common'
import { DomainEventMapperModule } from '../DomainEventMapper/DomainEventMapperModule'
import { EventBusMemory } from './EventBusMemory'

@Global()
@Module({
  imports: [DomainEventMapperModule],
  providers: [{ provide: Token.EVENT_BUS, useClass: EventBusMemory }],
  exports: [Token.EVENT_BUS],
})
export class EventBusModule {}
