/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

import { Question } from './question.entity';



@Entity()

export class Option {

  @PrimaryGeneratedColumn()

  id: number;



  @Column()

  text: string;

  @Column()
  isCorrect: boolean;



  @ManyToOne(() => Question, (question) => question.options)

  question: Question;

}
