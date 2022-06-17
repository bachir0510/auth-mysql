import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from '../../interface/jwtPayload.interface';

@Injectable()
export class AccessToken {
    constructor(
        private readonly jwtService:JwtService,
    ){}

  async call(payload: JwtPayload){
       const accessToken = await this.jwtService.sign(payload, {
        secret: 'secret',
        expiresIn: 3600
    })
    return accessToken
    }
}