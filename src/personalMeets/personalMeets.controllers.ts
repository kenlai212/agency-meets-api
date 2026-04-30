import { Body, Controller, Delete, Get, Post, Put, Query } from "@nestjs/common";
import { FindPersonalMeetsRequestDTO, NewPersonalMeetRequestDTO, PersonalMeetDTO } from "./personalMeets.dtos";
import { ApiOkResponse, ApiOperation } from "@nestjs/swagger";
import { DeleteMeetRequestDTO, UpdateMeetingLocationRequestDTO, UpdateMeetingTimeRequestDTO } from "../meets/meets.dtos";

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
    async FindPersonalMeet(@Query() query: FindPersonalMeetsRequestDTO): Promise<Array<PersonalMeetDTO>> {
        return [];
    }

    @Delete("/person-meet")
    @ApiOperation({
        summary: 'Delete Personal Meets',
        description: `Target Meet ID record will be deleted along will all invites`
    })
    @ApiOkResponse({
        description: 'Successfully DELETE returns a success message',
        type: PersonalMeetDTO,
    })
    async DeletePersonalmeet(@Query() query: DeleteMeetRequestDTO): Promise<string> {
        return `Successly deleted the Personal Meet`;
    }

    @Put("/person-meet/meeting-time")
    @ApiOperation({
        summary: 'Update Meeting Time',
        description: `Update Meeting Time`
    })
    @ApiOkResponse({
        description: 'Successfully PUT returns a PersonalMeetDTO',
        type: PersonalMeetDTO,
    })
    async updateMeetingTime(@Body() body: UpdateMeetingTimeRequestDTO): Promise<PersonalMeetDTO> {
        return new PersonalMeetDTO
    }

    @Put("/person-meet/meeting-location")
    @ApiOperation({
        summary: 'Update Meeting Location',
        description: `Update Meeting Location`
    })
    @ApiOkResponse({
        description: 'Successfully PUT returns a PersonalMeetDTO',
        type: PersonalMeetDTO,
    })
    async updateMeetingLocation(@Body() body: UpdateMeetingLocationRequestDTO): Promise<PersonalMeetDTO> {
        return new PersonalMeetDTO
    }
}