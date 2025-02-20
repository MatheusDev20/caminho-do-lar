/* eslint-disable no-unused-vars */
import { Pet } from '../../../domain/pets/models/pet';
import { Filters } from '../../../domain/pets/dtos/filters';
import CreatePetDTO from '../../pets/dto/create-dog-dto';
import Pets from '../../../infra/db/postgres/entities/pets';

type Photo = {
  imgId: string;
  url: string
}

export type IPetsRepository = {
  create(data: CreatePetDTO): Promise<Pets>
  findUserPets(user_id: string): Promise<Pets[]> | undefined;
  listAllUserPets(): Promise<Pets[]> | undefined;
  save(pet: Pets): Promise<Pets>;
  updatePetPhotos(pet: Pets, imgLinks: string[]): Promise<Photo[]>
  getPage(page: string, filters: Filters): Promise<{collection: Pets[], count: number} | undefined>
  findByID(id: string): Promise<Pet>
}
