import React from "react";

interface Props {
  petInformation: any;
}

export const PetCard = ({ petInformation }: Props): JSX.Element => {
  return (
    <div className="bg-white min-h-[320px] cursor-pointer rounded-lg shadow flex flex-col items-center">
      <header
        style={{
          backgroundImage: `url(https://www.soidog.org/sites/default/files/Dogs_for_adoption.jpg)`,
        }}
        className="flex flex-1 min-h-[70%] bg-gray-200 mb-4 w-full bg-cover bg-no-repeat bg-center"
      ></header>
      <h3 className="text-md font-medium">{petInformation.name}</h3>
      <h6>Medium Male Dog</h6>
      <p className="text-sm text-gray-500">Descrição do pet</p>
    </div>
  );
};
