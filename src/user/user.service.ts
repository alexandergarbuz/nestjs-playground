import { Injectable } from '@nestjs/common';
import { User } from './model/user.model';

@Injectable()
export class UserService {

    private readonly users: User[] = [
        { id: 1, name: 'Alex', email: 'alex@example.com' },
        { id: 2, name: 'Olga', email: 'olga@example.com' },
        { id: 3, name: 'John', email: 'john@example.com' },
      ];

    public findUser(id:number):User {
        return this.users[id];
    }
    public findAll():User[] {
        return this.users;
    }
}
