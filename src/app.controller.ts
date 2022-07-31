import {
  Body,
  Controller,
  Get,
  Post,
  Render,
  Res,
  Session,
} from '@nestjs/common';
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
  login(@Session() session, @Body() body) {
    session.userId = body.userId;
    return { res: 'logined!' };
  }

  @Get('/user')
  userInfo(@Session() session) {
    session.visited = session.visited + 1 || 1;
    return { res: session };
  }
}
