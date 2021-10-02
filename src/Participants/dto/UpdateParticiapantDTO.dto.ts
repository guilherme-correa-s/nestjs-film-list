import { PartialType } from '@nestjs/mapped-types';
import { CreateParticipantDTO } from './CreateParticipantDTO.dto';

export class UpdateParticipantsDTO extends PartialType(CreateParticipantDTO) {}
