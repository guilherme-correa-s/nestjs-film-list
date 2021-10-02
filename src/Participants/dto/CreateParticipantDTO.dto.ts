import { IsNotEmpty } from 'class-validator';

type Role = 'ACTOR' | 'STAFF';

export class CreateParticipantDTO {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  imagem: string;
  @IsNotEmpty()
  birth_date: string;
  @IsNotEmpty()
  role: Role;
}
