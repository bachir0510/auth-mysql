import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUserDTO } from '../../dto/user/createUser.dto';
import { User } from '../../entity/user.entity';


@Injectable()
export class CreateUser {
  constructor(
    @Inject(User.name) private readonly userRepository: Repository<User>,
  ) {}

  async call(dto: CreateUserDTO): Promise<CreateUserDTO> {
     const user = this.userRepository.create(dto);
    return this.userRepository.save(user);
  }
}
