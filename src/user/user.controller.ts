import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './model/user.model';


@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService){
    }

    @Get("user/:id")
    async findUser(@Param("id") id:number ):Promise<User> {
        return this.userService.finaUser(id);
    }

    @Get("all")
    async findAll(): Promise<User[]> {
      return this.userService.findAll();
    }
}
