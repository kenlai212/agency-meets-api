import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class MeetDTO {
    @ApiProperty({
        description: 'Unique Meet ID',
        example: `803aaf29-3f15-43d0-91c4-02a3a9fad9c0`
    })
    @IsNotEmpty()
    @IsString()
    @MaxLength(36)
    meetId: string;

    @ApiProperty({
        description: 'Meeting Date Time as ISO Date',
        example: `YYYY-MM-DDTHH:mm:ss.sssZ`
    })
    @IsNotEmpty()
    @IsDate()
    meetingTime: Date;

    @ApiProperty({
        description: 'Meeting location Address',
        example: `1 Main Street, New York, NY 10001`
    })
    @IsNotEmpty()
    @IsString()
    @MaxLength(255)
    meetingLocation: string;
}

export class NewMeetRequestDTO {
    @ApiProperty({
        description: 'Meeting Date Time as ISO Date',
        example: `YYYY-MM-DDTHH:mm:ss.sssZ`
    })
    @IsNotEmpty()
    @IsDate()
    meetingTime: Date;

    @ApiProperty({
        description: 'Meeting location Address',
        example: `1 Main Street, New York, NY 10001`
    })
    @IsNotEmpty()
    @IsString()
    @MaxLength(255)
    meetingLocation: string;
}

export class FindMeetRequestDTO {
    @ApiPropertyOptional({
        description: 'Unique Meet ID',
        example: `803aaf29-3f15-43d0-91c4-02a3a9fad9c0`
    })
    @IsOptional()
    @IsString()
    @MaxLength(36)
    meetId!: string;

    @ApiPropertyOptional({
        description: 'Search Meeting Date Time start range',
        example: `YYYY-MM-DDTHH:mm:ss.sssZ`
    })
    @IsOptional()
    @IsDate()
    searchStartTime: Date;

    @ApiPropertyOptional({
        description: 'Search Meeting Date Time ends range',
        example: `YYYY-MM-DDTHH:mm:ss.sssZ`
    })
    @IsOptional()
    @IsDate()
    searchEndTime: Date;
}