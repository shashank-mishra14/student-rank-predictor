/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';

export class SubmissionResponseDTO {
  @ApiProperty()
  id: number;

  @ApiProperty()
  score: number;

  @ApiProperty()
  accuracy: number;

  @ApiProperty({ type: Object })
  responseMap: Record<string, number>;

  @ApiProperty()
  submittedAt: Date;
}