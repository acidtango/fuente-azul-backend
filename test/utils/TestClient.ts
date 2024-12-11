import { tepper } from 'tepper'
import { TestApi } from './TestApi'

export class TestClient {
  constructor(private readonly testApi: TestApi) {}

  get app() {
    return this.testApi.getApp()
  }

  getEventBus() {
    return this.testApi.getEventBus()
  }

  health() {
    return tepper(this.app).get('/health')
  }
}
