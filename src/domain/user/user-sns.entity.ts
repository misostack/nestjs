import { UserEntity } from './user.entity';
import { BaseEntity } from '../base.entity';

export enum SnsType {
  FACEBOOK = 'facebook',
  GOOGLE = 'google',
  LINKEDIN = 'linkedin',
  TWITTER = 'twitter',
  INSTAGRAM = 'instagram',
}

export class UserSns extends BaseEntity {
  snsType: SnsType;
  snsId: string;
  authorizedDate: Date;
  // relationship
  user: UserEntity;
}
