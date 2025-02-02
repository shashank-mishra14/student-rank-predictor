/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [TypeOrmModule.forFeature([User]),  ConfigModule.forRoot({ isGlobal: true }),],
  exports: [TypeOrmModule],
  
})
export class UserModule {}