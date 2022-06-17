import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiOperation } from "@nestjs/swagger";
import { CreateUserDTO } from "../../domain/dto/user/createUser.dto";
import { User } from "../../domain/entity/user.entity";
import { CreateUser } from "../../domain/use-cases/user/create.user";
import { GetUsers } from "../../domain/use-cases/user/getAll.user";

@Controller('user')
export class UserController{
    constructor(
        private readonly getAllUsers: GetUsers,
        private readonly createUser: CreateUser,
      ) {}
    
      @Post()
      @ApiOperation({
        description: 'Create User',
      })
      async create(@Body() dto: CreateUserDTO): Promise<CreateUserDTO> {
        return this.createUser.call(dto);
      }
    
     
      @Get()
      @ApiOperation({
        description: 'Return all student',
      })
      async getAll(): Promise<User[]> {
        return this.getAllUsers.call();
      }
}