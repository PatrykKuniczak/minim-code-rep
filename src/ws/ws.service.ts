import { Injectable } from '@nestjs/common';
import { CreateWDto } from './dto/create-w.dto';
import { UpdateWDto } from './dto/update-w.dto';
import { HttpService } from '@nestjs/axios';
import { WsException } from '@nestjs/websockets';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class WsService {
  constructor(private readonly httpService: HttpService) {}

  async create(createWDto: CreateWDto) {
    const res = await firstValueFrom(
      this.httpService.get('https://jsonplaceholder.typicode.com/toos'),
    ).catch((err) => {
      throw new WsException(err);
    });
    console.log(res);
    return res;
  }

  findAll() {
    return `This action returns all ws`;
  }

  findOne(id: number) {
    return `This action returns a #${id} w`;
  }

  update(id: number, updateWDto: UpdateWDto) {
    return `This action updates a #${id} w`;
  }

  remove(id: number) {
    return `This action removes a #${id} w`;
  }
}
