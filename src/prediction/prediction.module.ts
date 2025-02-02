/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PredictionController } from './prediction.controller';
import { PredictionService } from './prediction.service';
import { QuizModule } from '../quiz/quiz.module';

@Module({
  imports: [QuizModule],
  controllers: [PredictionController],
  providers: [PredictionService]
})
export class PredictionModule {}