/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { QuizService } from '../quiz/quiz.service';

@Injectable()
export class PredictionService {
  constructor(private quizService: QuizService) {}

  async predictRank(userId: string): Promise<number> {
    const submissions = await this.quizService.getHistoricalSubmissions(userId);
    const avgScore = submissions.reduce((sum, sub) => sum + sub.score, 0) / submissions.length;

    // Simplified NEET rank prediction logic
    const NEET_MAX = 720;
    const QUIZ_MAX = 500; // Assuming your quiz max score is 500
    return Math.round((avgScore / QUIZ_MAX) * NEET_MAX);
  }
}