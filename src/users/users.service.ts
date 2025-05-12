import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    getUserName():string {
        return "This is UserName string";
    }
}
