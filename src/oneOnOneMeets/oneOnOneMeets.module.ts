import { Module } from '@nestjs/common';
import { OneOnOneMeetsController } from './oneOnOneMeets.controllers';

@Module({
    controllers: [
        OneOnOneMeetsController
    ]
})
export class OneOnOneMeetsModule { }