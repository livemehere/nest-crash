import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from '../entity/article.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Article)
    private articleRepository: Repository<Article>,
  ) {}

  findAll() {
    return this.articleRepository.find();
  }

  async createOne(body) {
    const { title, content } = body;
    const newArticle = this.articleRepository.create({ title, content });
    return this.articleRepository.save(newArticle);
  }

  updateById(id: number, body: any) {
    return this.articleRepository.update(id, body);
  }

  removeById(id: number) {
    return this.articleRepository.delete(id);
  }
}
