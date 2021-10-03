import { IsNotEmpty, IsString } from 'class-validator';

type Role = 'ACTOR' | 'STAFF';

export class CreateParticipantDTO {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsString()
  imagem: string;
  @IsNotEmpty()
  @IsString()
  birth_date: string;
  @IsNotEmpty()
  role: Role;
}
