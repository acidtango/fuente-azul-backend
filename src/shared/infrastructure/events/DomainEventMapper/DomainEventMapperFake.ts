import { DomainEvent } from '../../../domain/events/DomainEvent'
import { DomainEventSubscriber } from '../../../domain/events/DomainEventSubscriber'
import { DomainEventMapper, SubscribersAndEvent } from './DomainEventMapper'

export class DomainEventMapperFake implements DomainEventMapper {
  constructor(private readonly subscriber: DomainEventSubscriber<DomainEvent>) {}

  getSubscribersAndEvent(): SubscribersAndEvent | undefined {
    return
  }
}
