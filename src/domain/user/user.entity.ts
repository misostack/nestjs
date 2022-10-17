import { UserSns } from './user-sns.entity';
import { BaseEntity } from '../base.entity';
export enum UserType {
  admin = 'admin',
  user = 'user',
}

export class UserEntity extends BaseEntity {
  fullname: string;
  username: string;
  email: string;
  password: string;
  isActive: boolean;
  userType: UserType;
  snsAccounts?: UserSns[] = [];
  avatar: string;
  maximumFiles: number;
  totalFiles: number;
}
