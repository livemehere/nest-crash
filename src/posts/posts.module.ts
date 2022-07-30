import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from '../entity/article.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Article])],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
