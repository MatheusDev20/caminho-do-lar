/* eslint-disable no-useless-escape */
import { Pet } from "./../interfaces/pet";

export const parsePetImg = (pet: Pet): string => {
  return JSON.parse(pet.pet_photos)[0].url;
};

export const isEmpty = (obj: Object): boolean => {
  return Object.keys(obj).length === 0;
};

export const isValideEmail = (email: string): boolean => {
  if (!email) return false;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};
