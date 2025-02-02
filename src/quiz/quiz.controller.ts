/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { SubmissionResponseDTO } from './dto/submission-response.dto';

@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Get(':userId/current')
  async getCurrentQuiz(@Param('userId') userId: string): Promise<SubmissionResponseDTO> {
    return this.quizService.getCurrentSubmission(userId);
  }

  @Get(':userId/history')
  async getQuizHistory(@Param('userId') userId: string): Promise<SubmissionResponseDTO[]> {
    return this.quizService.getHistoricalSubmissions(userId);
  }
}