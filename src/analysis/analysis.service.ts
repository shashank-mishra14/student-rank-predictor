/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { QuizService } from '../quiz/quiz.service';
import { WeakTopicDTO } from './dto/weak-topic.dto';
interface TopicPerformance {
  correct: number;
  total: number;
}

@Injectable()
export class AnalysisService {
  constructor(private quizService: QuizService) {}

  async getWeakTopics(userId: string): Promise<WeakTopicDTO[]> {
    const submissions = await this.quizService.getHistoricalSubmissions(userId);
    const topicPerformance: Record<string, TopicPerformance> = {};

    if (Array.isArray(submissions)) {
      submissions.forEach(sub => {
        sub.quiz.questions.forEach(q => {
          const topic = q.topic;
          const isCorrect = sub.responseMap[q.id] === q.options.find(opt => opt?.isCorrect === true)?.id;
          topicPerformance[topic] = topicPerformance[topic] || { correct: 0, total: 0 };
          topicPerformance[topic].total++;
          if (isCorrect) {
            topicPerformance[topic].correct++;
          }
        });
      });
    }

    // Calculate accuracy per topic
    const result: Record<string, number> = {};
    Object.entries(topicPerformance).forEach(([topic, { correct, total }]) => {
      result[topic] = (correct / total) * 100;
    });

    return Object.entries(result).map(([topic, accuracy]) => ({ topic, accuracy }));
  }
}
