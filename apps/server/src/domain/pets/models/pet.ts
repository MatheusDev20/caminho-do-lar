import { User } from '../../user/models/user';

export interface Pet {
  id: string;
  name: string;
  gender: string;
  size: string;
  user_id: string;
  user: User
  pet_photos: string;
  history: string;
  castrated: boolean;
  vaccinated: boolean
}
