import { Controller, Get, Post, Render, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { Cookies } from './decorators/cookie-decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  root() {
    return;
  }

  @Post('/login')
  login(@Res({ passthrough: true }) res: Response) {
    res.cookie('name', 'kong');
    return { res: 'logined!' };
  }

  @Get('/user')
  userInfo(@Cookies('name') name: string) {
    console.log(name);
    return { res: name };
  }
}
