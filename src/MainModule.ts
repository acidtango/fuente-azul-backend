import { Module, ValidationPipe } from '@nestjs/common'
import { APP_FILTER, APP_GUARD, APP_PIPE } from '@nestjs/core'
import { AuthModule } from './auth/AuthModule'
import { config } from './shared/infrastructure/config'
import { EventBusModule } from './shared/infrastructure/events/EventBus/EventBusModule'
import { DomainErrorFilter } from './shared/infrastructure/filters/DomainErrorFilter'
import { RolesGuard } from './shared/infrastructure/guards/JwtAuthGuard'
import { LoggerSwitcherModule } from './shared/infrastructure/LoggerSwitcher.module'
import { SharedModule } from './shared/SharedModule'

@Module({
  imports: [
    AuthModule,
    EventBusModule,
    LoggerSwitcherModule.init({ disable: config.testModeEnabled }),
    SharedModule,
  ],
  controllers: [],
  providers: [
    { provide: APP_PIPE, useFactory: () => new ValidationPipe({ transform: true }) },
    { provide: APP_FILTER, useClass: DomainErrorFilter },
    { provide: APP_GUARD, useClass: RolesGuard },
  ],
})
export class MainModule {}
