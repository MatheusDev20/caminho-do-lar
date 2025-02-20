/* eslint-disable no-unused-vars */
// import { PetInfo } from '../dtos';
import Pets from '../../../infra/db/postgres/entities/pets';

export interface IGetPetPage {
  getPage(page: string, filters: any): Promise<{collection: Pets[], count: number} | undefined>
}
