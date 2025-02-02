/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async createUser() {
    const newUser = this.userRepo.create();
    return this.userRepo.save(newUser);
  }
}