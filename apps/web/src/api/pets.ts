import { Pet } from "../interfaces/pet";

import { RegisterPetData } from "../interfaces";
import { HafApi } from "./haf_backend";
import { PetPageParams } from "../@types";
import { convertQueryParams, GET } from "../libs/axios/handlers";

export const getPetsList = async (data: PetPageParams): Promise<Pet[]> => {
  const currentPage = data.page;
  const fullPath = convertQueryParams("/api/pet/list/", {
    ...data.filters,
    page: currentPage,
  });
  const res = await GET<Pet[]>({ authenticated: false, path: fullPath });

  return res.body;
};

export const uploadImages = async (
  files: File[],
  dogName: string,
): Promise<void> => {
  try {
    const formData = new FormData();
    for (const file of files) {
      formData.append("photos", file);
    }
    await HafApi.post(`/api/pet/upload?name=${dogName}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const createPet = async (petInfo: RegisterPetData): Promise<void> => {
  const response = await HafApi.post("/api/pet", petInfo);
  return response.data;
};

export const getPetInfo = async (petId: string): Promise<Pet> => {
  try {
    const response = await HafApi.get(`/api/pet/${petId}`);
    return response.data;
  } catch (err) {
    throw new Error("Erro ao carregar dados do animal");
  }
};
