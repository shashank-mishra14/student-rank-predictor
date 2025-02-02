/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { QuizSubmission } from './entities/quiz-submission.entity';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(QuizSubmission)
    private submissionRepo: Repository<QuizSubmission>,
  ) {}

  async getCurrentSubmission(userId: string): Promise<QuizSubmission> {
    const submission = await this.submissionRepo.findOne({
      where: { user: { id: userId } },
      order: { submittedAt: 'DESC' },
      relations: ['quiz', 'quiz.questions', 'quiz.questions.options'],
    });
    if (!submission) {
      throw new Error('Submission not found');
    }
    return submission;
  }

  async getHistoricalSubmissions(userId: string): Promise<QuizSubmission[]> {
    return this.submissionRepo.find({
      where: { user: { id: userId } },
      order: { submittedAt: 'DESC' },
      take: 5,
      relations: ['quiz', 'quiz.questions', 'quiz.questions.options'],
    });
  }
}