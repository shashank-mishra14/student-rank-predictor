/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from '@nestjs/common';
import { AnalysisService } from './analysis.service';
import { WeakTopicDTO } from './dto/weak-topic.dto';

@Controller('analysis')
export class AnalysisController {
  constructor(private readonly analysisService: AnalysisService) {}

  @Get(':userId/weak-topics')
  async getWeakTopics(@Param('userId') userId: string): Promise<WeakTopicDTO[]> {
    return await this.analysisService. getWeakTopics(userId);
  }
}