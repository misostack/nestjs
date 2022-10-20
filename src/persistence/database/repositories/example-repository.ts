import { Example } from './../entities/Example';

import { Repository } from 'typeorm';
import { CustomRepository } from '../database.decorator';

@CustomRepository(Example)
export class ExampleRepository extends Repository<Example> {}
