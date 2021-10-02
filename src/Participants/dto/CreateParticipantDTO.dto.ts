import { IsNotEmpty } from 'class-validator';
enum Role {
  ACTOR,
  STAFF,
}

export class CreateParticipantDTO {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  imagem: string;
  @IsNotEmpty()
  birth_day: string;
  @IsNotEmpty()
  role: Role;
}
