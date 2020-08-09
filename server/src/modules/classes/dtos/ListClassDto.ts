import { IsNotEmpty } from 'class-validator';

export class ListClassDto {

    @IsNotEmpty()
    weekDay: number;


    subject: string;

    @IsNotEmpty()
    time: string;
}