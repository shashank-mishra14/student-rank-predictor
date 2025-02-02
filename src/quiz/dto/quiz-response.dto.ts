/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';

export class QuizResponseDTO {
  @ApiProperty({ example: 43, description: 'Unique identifier for the quiz' })
  id: number;

  @ApiProperty({ example: 'Structural Organisation in Animals', description: 'Quiz topic' })
  topic: string;

  @ApiProperty({ example: '2024-07-03T00:00:00.000+05:30', description: 'Quiz creation timestamp' })
  createdAt: Date;
}