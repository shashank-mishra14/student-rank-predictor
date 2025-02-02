/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';

export class RankPredictionDTO {
  @ApiProperty({ example: 1500, description: 'Predicted NEET rank' })
  rank: number;

  @ApiProperty({ example: 620, description: 'Estimated NEET score' })
  estimatedScore: number;

  @ApiProperty({ example: 85.5, description: 'Prediction confidence percentage' })
  confidence: number;
}