import { Module } from '@nestjs/common';
import { PersonalMeetsModule } from './personalMeets/personalMeets.module';
import { GroupMeetsModule } from './groupMeets/groupMeets.module';
import { InvitesModule } from './invites/invites.module';

@Module({
  imports: [
    PersonalMeetsModule,
    GroupMeetsModule,
    InvitesModule
  ],
})
export class AppModule { }
