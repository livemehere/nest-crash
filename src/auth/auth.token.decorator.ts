import { createParamDecorator } from '@nestjs/common';

export const Token = createParamDecorator((data, ctx) => {
  const request = ctx.switchToHttp().getRequest();
  return request.headers.authorization;
});
