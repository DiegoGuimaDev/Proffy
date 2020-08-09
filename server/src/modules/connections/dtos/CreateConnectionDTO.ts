import { IsUUID, IsNotEmpty } from 'class-validator';

export class CreateConnectionDTO {
    @IsUUID('4')
    @IsNotEmpty()
    idUser: string;
}