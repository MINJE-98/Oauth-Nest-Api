import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Injectable()
export class AuthService {
  create(createAuthDto: CreateAuthDto) {
    return 'This action adds a new auth';
  }

  async findAll(query) {
    const result = await axios.post(
      `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=95c2b6fc38e21b3d6d255e32020e7b75&redirect_uri=http://localhost:3001/auth&code=${query}`,
    );
    if (result.status == 200) {
      return result.data;
    } else {
      return 'error';
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
