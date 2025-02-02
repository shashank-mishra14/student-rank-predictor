/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { QuizSubmission } from '../quiz/entities/quiz-submission.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;


  @OneToMany(() => QuizSubmission, (submission) => submission.user)
  submissions: QuizSubmission[];
}