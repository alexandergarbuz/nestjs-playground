import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './model/user.model';


@Controller('user')
export class UserController {

    private readonly userService: UserService;
    constructor(userService: UserService){
      this.userService = userService;

    }

    @Get("user/:id")
    async findUser(@Param("id") id:number ):Promise<User> {
        return this.userService.findUser(id);
    }

    @Get("all")
    async findAll(): Promise<User[]> {
      return this.userService.findAll();
    }
}
