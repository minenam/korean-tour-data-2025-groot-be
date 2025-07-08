import { SetMetadata } from '@nestjs/common';

export const API_RESPONSE_METADATA = 'api_response_metadata';

export const ApiResponse = (description: string) => SetMetadata(API_RESPONSE_METADATA, description);
