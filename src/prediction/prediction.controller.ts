/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from '@nestjs/common';
import { PredictionService } from './prediction.service';
import { RankPredictionDTO } from './dto/rank-prediction.dto';

@Controller('prediction')
export class PredictionController {
  constructor(private readonly predictionService: PredictionService) {}

  @Get(':userId/rank')
  async predictRank(@Param('userId') userId: string): Promise<RankPredictionDTO> {
    const rank = await this.predictionService.predictRank(userId);
    return {
      rank,
      estimatedScore: Math.floor((rank / 1000000) * 720), // Example calculation
      confidence: 85.5
    };
  }
}