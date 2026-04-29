import { Module } from '@nestjs/common';
import { OneOnOneMeetsModule } from './oneOnOneMeets/oneOnOneMeets.module';
import { GroupMeetsModule } from './groupMeets/groupMeets.module';

@Module({
  imports: [
    OneOnOneMeetsModule,
    GroupMeetsModule
  ],
})
export class AppModule { }
