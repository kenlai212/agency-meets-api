import { Module } from '@nestjs/common';
import { OneOnOneMeetsModule } from './oneOnOneMeets/oneOnOneMeets.module';

@Module({
  imports: [
    OneOnOneMeetsModule
  ],
})
export class AppModule { }
