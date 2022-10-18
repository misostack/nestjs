import { Example } from './../entities/Example';
import { Injectable } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class ExampleRepository {
  constructor(
    @InjectRepository(Example) private repository: Repository<Example>,
  ) {}
  findOne(id?: 1) {
    return this.repository.findOneBy({ id });
  }
}
