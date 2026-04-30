import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { NewPersonalMeetRequestDTO, PersonalMeetDTO } from "./personalMeets.dtos";
import { ApiOkResponse, ApiOperation } from "@nestjs/swagger";
import { FindMeetRequestDTO } from "../meets/meets.dtos";

@Controller()
export class PersonalMeetsController {
    @Post("/personal-meet")
    @ApiOperation({
        summary: 'Create new Personal Meet',
        description: `Create new Personal Meet`
    })
    @ApiOkResponse({
        description: 'Successfully POST a new Personal Meet',
        type: PersonalMeetDTO,
    })
    async CreateNewPersonalMeet(@Body() body: NewPersonalMeetRequestDTO): Promise<PersonalMeetDTO> {
        return new PersonalMeetDTO;
    }

    @Get("/personal-meet")
    @ApiOperation({
        summary: 'Find Personal Meets',
        description: `If provide a Meet ID, the API will return the specific Meet. If provide a time range, the API will return list of Meets`
    })
    @ApiOkResponse({
        description: 'Successfully GET returns array of PersonalMeetDTOs',
        type: PersonalMeetDTO,
    })
    async FindPersonalMeet(@Query() query: FindMeetRequestDTO): Promise<Array<PersonalMeetDTO>> {
        return [];
    }
}