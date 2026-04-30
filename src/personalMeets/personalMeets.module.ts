import { Module } from '@nestjs/common';
import { PersonalMeetsController } from './personalMeets.controllers';

@Module({
    controllers: [
        PersonalMeetsController
    ]
})
export class PersonalMeetsModule { }