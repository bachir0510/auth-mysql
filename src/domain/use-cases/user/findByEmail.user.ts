import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../../entity/user.entity';

@Injectable()
export class FindByEmail {
  constructor(
    @Inject(User.name) private readonly userRepository: Repository<User>,
  ) {}

  async call(email: string): Promise<User> {
    return await this.userRepository.findOne({ email });
  }
}