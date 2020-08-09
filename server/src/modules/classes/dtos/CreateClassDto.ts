import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreateClassDto {

    @IsNotEmpty()
    @MaxLength(200)
    name: string;

    @IsNotEmpty()
    avatar: string;

    @IsNotEmpty()
    whatsapp: string;

    @IsNotEmpty()
    bio: string;
    subject: string;
    cost: number;
    schedules: Array<{
        weekDay: number,
        from: string,
        to: string
    }>
}