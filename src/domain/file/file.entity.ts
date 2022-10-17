import { UserEntity } from './../user/user.entity';
import { BaseEntity } from '../base.entity';

export enum FileType {
  IMAGE = 'image',
  PDF = 'pdf',
  OTHERS = 'others',
}

export class FileEntity extends BaseEntity {
  name: string;
  fileType: FileType;
  mimeType: string;
  sizeInBytes: number;
  privatePath: string; // bucket's path
  publicPath: string;
  shortLink: string;
  views: number;
  downloads: number;
  isActive: boolean;
  isPublic: boolean;
  // relationship
  user: UserEntity;
}
