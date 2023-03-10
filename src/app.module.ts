import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { MoviesModule } from './movies/movies.module';
import { AuthModule } from './auth/auth.module';
import { MovieTagsModule } from './movie-tags/movie-tags.module';
import { typeOrmConfig } from './config/typeorm-config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(typeOrmConfig),
    AuthModule,
    UsersModule,
    MoviesModule,
    MovieTagsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
