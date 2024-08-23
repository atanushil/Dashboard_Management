"use client";

import { useState } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";

export default function MenuItems({ options, onSelect }) {
  const [selected, setSelected] = useState(options[1]);

  const handleSelectOption = (option) => {
    setSelected(option);
    if (onSelect) {
      onSelect(option.name);
    }
  };

  return (
    <Listbox value={selected} onChange={handleSelectOption}>
      <div className="relative w-full">
        <ListboxButton className=" w-full justify-between  flex items-center">
          <span className="   truncate-start w-16 px-2  sm:w-full">{selected.name}</span>
          <span className="  h-full">
            <ChevronDownIcon
              aria-hidden="true"
              className="h-5 :w-5  text-gray-400"
            />
          </span>
        </ListboxButton>

        <ListboxOptions
          transition
          className="absolute z-10 mt-1 max-h-66 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
        >
          {options.map((item) => (
            <ListboxOption
              key={item.id}
              value={item}
              className="group  flex justify-between cursor-default select-none py-2  text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
            >
              <span className="sm:pl-2  block truncate-start  font-normal group-data-[selected]:font-semibold ">
                {item.name}
              </span>
              <span className="   inset-y-0 flex items-center px-1 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                <CheckIcon aria-hidden="true" className="h-5 w-5" />
              </span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
}
