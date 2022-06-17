import { Injectable } from "@nestjs/common";
import { SignInDto } from "../../dto/auth/signIn.dto";
import { JwtPayload } from "../../interface/jwtPayload.interface";
import { AccessToken } from "./accessToken.auth";
import { GetRefreshToken } from "./getRefreshToken.auth";
import { UpdateRefreshToken } from "./updateRefreshToken.auth";
import { ValidatePassword } from "./validatePassword.auth";

@Injectable()
export class SignIn{
    constructor(
        private readonly accessToken: AccessToken,
        private readonly getRefreshToken: GetRefreshToken,
        private readonly updateRefreshToken: UpdateRefreshToken,
        private readonly validatePassword: ValidatePassword,
        private readonly payload: JwtPayload
    ){}
    
    async call(singinDto: SignInDto) {
      const user = this.validatePassword.call(singinDto);

     const payload = this.payload

      const accessToken = this.accessToken.call(payload);

      const refreshToken = this.getRefreshToken.call(payload)

      await this.updateRefreshToken.call(refreshToken, (await user).email)

      return {
           accessToken,
           refreshToken
      }
    }
}