import { Body, Controller, Post } from "@nestjs/common";
import { OneOnOneMeetsDTO, NewOneOnOneMeetsRequestDTO } from "./oneOnOneMeets.dtos";
import { ApiOkResponse, ApiOperation } from "@nestjs/swagger";

@Controller()
export class OneOnOneMeetsController {
    @Post("/one-one-meet")
    @ApiOperation({
        summary: 'Create new One-On-One Meet',
        description: `Create new One-On-One Meet`
    })
    @ApiOkResponse({
        description: 'Successfully POST a new One-On-One meet',
        type: OneOnOneMeetsDTO,
    })
    async CreateNewOneOnOneMeet(@Body() body: NewOneOnOneMeetsRequestDTO): Promise<OneOnOneMeetsDTO> {
        return new OneOnOneMeetsDTO;
    }
}