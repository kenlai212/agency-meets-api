import { Module } from '@nestjs/common';
import { groupMeetsController } from './groupMeets.controller';

@Module({
    controllers: [
        groupMeetsController
    ]
})
export class GroupMeetsModule { }