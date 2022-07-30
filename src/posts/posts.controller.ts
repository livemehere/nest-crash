import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @Post()
  create(@Body() body: any) {
    return this.postsService.createOne(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.postsService.updateById(+id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postsService.removeById(+id);
  }
}
