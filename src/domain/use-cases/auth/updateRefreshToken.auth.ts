import { Inject, Injectable } from "@nestjs/common";
import * as bcrypt from "bcryptjs"
import { Repository } from "typeorm";
import { User } from "../../entity/user.entity";

@Injectable()
export class UpdateRefreshToken {
    constructor(
      @Inject(User.name)  private readonly userRepository: Repository<User>
    ){}

    async call(refreshToken, email){
        if (refreshToken) {
            refreshToken = await bcrypt.hash(refreshToken, 10)
        }
        
        await this.userRepository.update({ email: email }, {
            refreshtoken: refreshToken
        })
    }
}