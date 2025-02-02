/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AnalysisController } from './analysis.controller';
import { AnalysisService } from './analysis.service';
import { QuizModule } from '../quiz/quiz.module';

@Module({
  imports: [QuizModule],
  controllers: [AnalysisController],
  providers: [AnalysisService]
})
export class AnalysisModule {}