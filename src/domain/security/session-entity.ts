import { BaseEntity } from '../base.entity';
import { UserEntity } from '../user/user.entity';

export enum SessionMfaType {
  EMAIL = 'email',
}
export class SessionEntity extends BaseEntity {
  mfaType: SessionMfaType;
  expiredAt: Date;
  token: string;
  userAgent: string;
  // relationship
  user: UserEntity;
}
