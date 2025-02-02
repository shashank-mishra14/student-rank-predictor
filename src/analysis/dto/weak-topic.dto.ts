/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';

export class WeakTopicDTO {
  @ApiProperty()
  topic: string;

  @ApiProperty()
  accuracy: number;
}