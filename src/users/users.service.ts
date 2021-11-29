import { Injectable } from '@nestjs/common';

export type User = {
  id: number;
  name: string;
  username: string;
  password: string;
};

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      name: 'Hamza',
      username: 'hamza',
      password: '123',
    },
    { id: 1, name: 'Bilal', username: 'bilal', password: '123' },
  ];

  async findOne(username: string): Promise<User | undefined> {
    const check = this.users.find((user) => user.username === username);
    return check;
  }
}
