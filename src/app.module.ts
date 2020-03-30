import {getConnectionOptions} from 'typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import {UserModule} from './users/user.module';
import {join} from 'path';
import {UsersEntity} from './users/users.entity';

const getType = (envType: any) => {
  switch (envType) {
    case 'mysql':
    case 'mssql':
    case 'postgres':
    case 'mariadb':
    case 'mongodb':
      return envType;
    default:
      return 'mysql';
  }
};

getConnectionOptions();

console.log('process.env.TYPEORM_HOST', process.env.TYPEORM_HOST  || 'localhost');
console.log('process.env.TYPEORM_PORT', Number.parseInt(process.env.TYPEORM_PORT || '3306', 10));
console.log('process.env.TYPEORM_USERNAME', process.env.TYPEORM_USERNAME || 'fx');
console.log('process.env.TYPEORM_PASSWORD', process.env.TYPEORM_PASSWORD || '123');
console.log('process.env.TYPEORM_DATABASE', process.env.TYPEORM_DATABASE || 'fx');
console.log('process.env.entities', process.env.TYPEORM_ENTITIES ||  __dirname + '/**/*.entity{.ts,.js}');


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: getType(process.env.TYPEORM_CONNECTION),
      host: process.env.TYPEORM_HOST || 'localhost',
      port: Number.parseInt(process.env.TYPEORM_PORT || '3306', 10),
      logging: false,
      username: process.env.TYPEORM_USERNAME || 'fx',
      password: process.env.TYPEORM_PASSWORD || '123',
      database: process.env.TYPEORM_DATABASE || 'fx',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: (process.env.TYPEORM_SYNCHRONIZE === 'true' || true),
    }), AuthModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
