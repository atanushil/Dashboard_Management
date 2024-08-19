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
  const [selected, setSelected] = useState(options[3]);

  const handleSelectOption = (option) => {
    setSelected(option);
    if (onSelect) {
      onSelect(option.name);
    }
  };

  return (
    <Listbox value={selected} onChange={handleSelectOption}>
      <div className="relative w-full">
        <ListboxButton className="relative w-full cursor-default py-1.5 pr-10 text-left text-gray-900 shadow-sm focus:outline-none sm:text-sm sm:leading-6">
          <span className="ml-3 block truncate">{selected.name}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
            <ChevronDownIcon
              aria-hidden="true"
              className="h-5 w-5 text-gray-400"
            />
          </span>
        </ListboxButton>

        <ListboxOptions
          transition
          className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
        >
          {options.map((item) => (
            <ListboxOption
              key={item.id}
              value={item}
              className="group relative cursor-default select-none py-2 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
            >
              <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                {item.name}
              </span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                <CheckIcon aria-hidden="true" className="h-5 w-5" />
              </span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
}
