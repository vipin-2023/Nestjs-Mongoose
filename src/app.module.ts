import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot("mongodb+srv://vipincpy123:ob8hYO6svipyb7xq@cluster0.05uyher.mongodb.net/?retryWrites=true&w=majority",),TaskModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
