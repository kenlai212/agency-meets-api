import { Module } from '@nestjs/common';
import { PersonalMeetsModule } from './personalMeets/personalMeets.module';
import { GroupMeetsModule } from './groupMeets/groupMeets.module';

@Module({
  imports: [
    PersonalMeetsModule,
    GroupMeetsModule
  ],
})
export class AppModule { }
