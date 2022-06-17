import { ApiProperty } from '@nestjs/swagger';

export class MetadataDto {
  @ApiProperty({
    required: true,
    description: 'Name of this object',
  })
  name: string;
  @ApiProperty({
    required: false,
    description: 'Description for this object',
  })
  description?: string;
  @ApiProperty({
    required: false,
    description: 'Author of this object',
  })
  author?: string;
  @ApiProperty({
    required: false,
    description: 'Timestamp of creation date of this object',
  })
  timestamp?: number;
  @ApiProperty({
    required: false,
    description: 'Given type for this object',
  })
  type?: string;
  @ApiProperty({
    required: false,
    description: 'Given class for this object',
  })
  class?: string;
  @ApiProperty({
    required: false,
    description: 'Given score for this object',
  })
  score?: number;
}
