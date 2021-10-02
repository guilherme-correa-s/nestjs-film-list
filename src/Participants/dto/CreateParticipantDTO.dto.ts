import { IsNotEmpty } from 'class-validator';

export class CreateParticipantDTO {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  imagem: string;
  @IsNotEmpty()
  birth_day: string;
  @IsNotEmpty()
  role: boolean;
}
