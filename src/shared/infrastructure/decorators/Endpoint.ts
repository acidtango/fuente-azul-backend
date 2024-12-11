import { applyDecorators, HttpCode } from '@nestjs/common'
import {
  ApiOperation,
  ApiResponse,
  ApiResponseMetadata,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger'
import { Public } from './Public'

export enum DocumentationTag {
  HEALTH = 'Health',
  EVENTS = 'Events',
  SPEAKERS = 'Speakers',
  TALKS = 'Talks',
}

export type Options = {
  tag: DocumentationTag
}
export type EndpointOptions = ApiResponseMetadata & Options

export function Endpoint(options: EndpointOptions) {
  if (options.status && typeof options.status === 'number') {
    const { description, ...remainingOptions } = options
    const decorators = [
      ApiOperation({ summary: description }),
      ApiResponse(remainingOptions),
      HttpCode(options.status),
      ApiTags(options.tag),
    ]

    return applyDecorators(...decorators, Public())
  }

  return applyDecorators(ApiResponse(options), ApiTags(options.tag), ApiSecurity('bearer'))
}
