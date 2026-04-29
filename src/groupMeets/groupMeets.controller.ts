import { Body, Controller, Post } from "@nestjs/common";
import { GroupMeetsDTO, NewGroupMeetsRequestDTO } from "./groupMeets.dtos";
import { ApiOkResponse, ApiOperation } from "@nestjs/swagger";

@Controller()
export class groupMeetsController {
    @Post("/group-meet")
    @ApiOperation({
        summary: 'Create new Group Meet',
        description: `Create new Group Meet`
    })
    @ApiOkResponse({
        description: 'Successfully POST a new Group Meet',
        type: GroupMeetsDTO,
    })
    async createNewGroupMeet(@Body() body: NewGroupMeetsRequestDTO): Promise<GroupMeetsDTO> {
        return new GroupMeetsDTO();
    }
}
