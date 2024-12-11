import { INestApplication, VersioningType } from '@nestjs/common'
import { Test } from '@nestjs/testing'
import { Server } from 'http'
import { MainModule } from '../../src/MainModule'
import { EventBus } from '../../src/shared/domain/models/hex/EventBus'
import { Token } from '../../src/shared/domain/services/Token'
import { config } from '../../src/shared/infrastructure/config'
import { isReseteable } from '../../src/shared/infrastructure/repositories/Reseteable'

export class TestApi {
  private static instance: TestApi

  private app?: Server

  private nestApplication?: INestApplication

  public static async create() {
    if (!TestApi.instance) {
      TestApi.instance = new TestApi()
      await TestApi.instance.initialize()
    }

    return TestApi.instance
  }

  private constructor() {}

  async initialize() {
    const testingModuleBuilder = this.createRootModule()
    const moduleFixture = await testingModuleBuilder.compile()
    this.nestApplication = moduleFixture.createNestApplication()
    this.nestApplication.setGlobalPrefix(config.apiPrefix)
    this.nestApplication.enableVersioning({ type: VersioningType.URI })
    await this.nestApplication.init()

    this.app = this.nestApplication.getHttpServer()
  }

  private createRootModule() {
    const testingModuleBuilder = Test.createTestingModule({
      imports: [MainModule],
    })

    return testingModuleBuilder
  }

  async close() {
    await this.nestApplication?.close()
  }

  public getApp() {
    if (!this.app) {
      throw new Error('TestApi not initialized')
    }

    return this.app
  }

  public getEventBus() {
    return this.getNestApplication().get<EventBus>(Token.EVENT_BUS)
  }

  private getNestApplication() {
    if (!this.nestApplication) {
      throw new Error('TestApi not initialized')
    }

    return this.nestApplication
  }

  async clearState() {
    const promises = Object.values(Token)
      .map((token) => this.getNestApplication().get(token))
      .filter(isReseteable)
      .map((dependency) => dependency.reset())

    await Promise.all(promises)
  }
}
