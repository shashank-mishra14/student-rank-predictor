/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsObject } from 'class-validator';

export class CreateSubmissionDto {
  @IsNotEmpty()
  userId: string;

  @IsNotEmpty()
  quizId: number;

  @IsObject()
  responseMap: Record<string, number>;
}