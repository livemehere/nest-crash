import { Injectable } from '@nestjs/common';

interface User {
  userId: number;
  username: string;
  password: string;
}

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      userId: 1,
      username: 'kong',
      password: '1234',
    },
    {
      userId: 2,
      username: 'ha',
      password: '5678',
    },
  ];

  async findByName(username: string): Promise<User | undefined> {
    return this.users.find((u) => u.username === username);
  }
}
