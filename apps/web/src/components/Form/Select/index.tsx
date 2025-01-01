/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { ChevronUpIcon } from "../../../components/icons/chevron-up.icon";
import { ChevronDownIcon } from "../../../components/icons/chevron.icon";
import React from "react";

interface Options {
  imgLink: string;
  name: string;
}
interface Props {
  options: Options[];
  placeholder: string;
  label: string;
  value: any;
  onChange: (selected: Options) => void;
}

export const Select = ({
  options,
  placeholder,
  label,
  value,
  onChange,
}: Props): JSX.Element => {
  const [openDropDown, setOpenDropDown] = React.useState(false);
  console.log("On", onChange);
  return (
    <div className="flex flex-col mt-7 items-center">
      <div className="w-full flex flex-col items-center h-64">
        <div className="w-full px-4">
          <div className="flex flex-col items-center relative">
            <div className="w-full">
              <label className="block text-md text-gray-600">{label}</label>
              <div
                className="my-2 p-1 bg-white flex border border-gray-200 rounded cursor-pointer"
                onClick={() => {
                  setOpenDropDown(!openDropDown);
                }}
              >
                <input
                  value={value ?? ""}
                  placeholder={placeholder}
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-800 cursor-pointer"
                  readOnly
                />
                <div className="text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200 hover:bg-slate-50">
                  <button className="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none">
                    {openDropDown ? <ChevronDownIcon /> : <ChevronUpIcon />}
                  </button>
                </div>
              </div>
            </div>
            {options.length > 0 && openDropDown && (
              <div className="absolute shadow bg-white top-[100%] z-40 w-full left-0 rounded max-h-[300px] overflow-y-auto">
                <div className="flex flex-col w-full">
                  {options.map((option, i) => (
                    <div
                      key={i}
                      className="cursor-pointer w-full border-gray-100 hover:bg-teal-100"
                      onClick={() => {
                        onChange(option);
                        setOpenDropDown(false);
                      }}
                    >
                      <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-teal-100">
                        <div className="w-6 flex flex-col items-center">
                          <div className="flex relative bg-orange-500 justify-center items-center m-1 mr-2 w-6 h-6 rounded-full">
                            <img
                              className="rounded-full"
                              alt={option.name}
                              src={option.imgLink}
                            />
                          </div>
                        </div>
                        <div className="w-full items-center flex">
                          <div className="mx-2 -mt-1">{option.name}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
