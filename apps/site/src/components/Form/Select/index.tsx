/* eslint-disable @typescript-eslint/no-explicit-any */
 
import clsx from "clsx";
import { ChevronUpIcon } from "../../../components/icons/chevron-up.icon";
import { ChevronDownIcon } from "../../../components/icons/chevron.icon";
import React from "react";

interface Options {
  imgLink?: string;
  name: string;
}
interface Props {
  variant?: "sm" | "md" | "lg";
  custom?: string;
  options: Options[];
  placeholder: string;
  label: string;
  value: any;
  onChange: (selected: Options) => void;
  optionBg?: string;
}

export const Select = ({
  options,
  optionBg,
  custom,
  variant,
  placeholder,
  label,
  value,
  onChange,
}: Props) => {
  const [openDropDown, setOpenDropDown] = React.useState(false);

  return (
    <div
      className={clsx(
        "flex flex-col items-center",
        custom
          ? `w-[${custom}]`
          : {
              "w-1/3": variant === "sm",
              "w-2/3": variant === "md",
              "w-full": variant === "lg",
            },
      )}
    >
      <div className="w-full flex flex-col items-center">
        <div className="w-full">
          <div className="flex flex-col items-center relative">
            <div className="w-full">
              <label className="text-sm font-medium text-gray-700">
                {label}
              </label>
              <div
                className="my-2 p-2 rounded-lg bg-white border-gray-300 flex border cursor-pointer"
                onClick={() => {
                  setOpenDropDown(!openDropDown);
                }}
              >
                <input
                  value={value ?? ""}
                  placeholder={placeholder}
                  className="p-2 px-2 appearance-none outline-none w-full text-gray-800 cursor-pointer"
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
                      className="cursor-pointer w-full border-gray-100 hover:bg-rose-50"
                      onClick={() => {
                        onChange(option);
                        setOpenDropDown(false);
                      }}
                    >
                      <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-teal-100">
                        <div className="w-6 flex flex-col items-center">
                          {option.imgLink && (
                            <div
                              className={`flex relative ${optionBg ?? "bg-orange-500"}  justify-center items-center m-1 mr-2 w-6 h-6 rounded-full`}
                            >
                              <img
                                className="rounded-full"
                                alt={option.name}
                                src={option.imgLink}
                              />
                            </div>
                          )}
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
