export const config = {
  listeningPort: parseInt(process.env.APP_PORT || '8080', 10),
  apiPrefix: process.env.API_PREFIX || 'api/',
  testModeEnabled: process.env.NODE_ENV === 'test',
  runThirdPartyTests: process.env.RUN_THIRD_PARTY_TESTS === 'true',
}
