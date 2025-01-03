import React from "react";
import { Heart } from "../icons/heart.icon";

interface Props {
  petInformation: any;
}

export const PetCard = ({ petInformation }: Props): JSX.Element => {
  return (
    <div className="bg-white cursor-pointer rounded-lg shadow flex flex-col items-stretch">
      <header
        style={{
          backgroundImage: `url(https://www.soidog.org/sites/default/files/Dogs_for_adoption.jpg)`,
        }}
        className="rounded-t-lg relative bg-gray-200 h-48 md:h-48 bg-cover bg-no-repeat bg-center"
      >
        <button
          className="absolute left-[80%] top-2 bg-black p-2 rounded-full shadow-md  transition  delay-75 ease-in-out hover:bg-primary-500 group"
          aria-label="Add to Favorites"
        >
          <Heart tClass="w-4 h-4 text-white font-semibold group-hover:text-white transition-colors" />
        </button>
      </header>
      <section className="flex gap-2 debug items-center flex-col p-4">
        <h3 className="md:text-2xl text-sm font-bold text-center text-primary-700">
          {petInformation.name}
        </h3>
        <h6 className="text-sm font-semibold text-gray-700">
          Macho de porte médio
        </h6>
        <p className="text-sm text-primary-500">
          Dócio, atencioso e bom vigilante
        </p>
      </section>
    </div>
  );
};
