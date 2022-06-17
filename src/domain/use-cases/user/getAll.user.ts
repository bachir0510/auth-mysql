import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../../entity/user.entity';

@Injectable()
export class GetUsers {
  constructor(
    @Inject(User.name) private readonly userRepository: Repository<User>,
  ) {}

  async call(): Promise<User[]> {
    return this.userRepository.find();
  }
}
