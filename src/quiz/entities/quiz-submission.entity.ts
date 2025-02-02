/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../../user/user.entity';
import { Quiz } from './quiz.entity';

@Entity()
export class QuizSubmission {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('jsonb')
  responseMap: Record<string, number>; // { questionId: selectedOptionId }

  @Column()
  score: number;

  @Column()
  accuracy: number;

  @ManyToOne(() => User, (user) => user.submissions)
  user: User;

  @ManyToOne(() => Quiz, (quiz) => quiz.submissions)
  quiz: Quiz;

  @Column('timestamp')
  submittedAt: Date;
}