import type { Pet } from "@/@types/pet";

export const parsePetImg = (pet: Pet): string => {
  return JSON.parse(pet.pet_photos)[0].url;
};

export const isEmpty = (obj: object): boolean => {
  return Object.keys(obj).length === 0;
};

export const isValideEmail = (email: string): boolean => {
  if (!email) return false;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

export const timeout = async (ms: number): Promise<void> => {
  await new Promise((resolve) => setTimeout(resolve, ms));
};
