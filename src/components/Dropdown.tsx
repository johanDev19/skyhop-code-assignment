import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

interface Options {
  label: string;
  value: string;
}
interface Props {
  placeholder: string;
  options: Options[];
  onChange?: (value: string) => void | Promise<void> | undefined;
  className?: string;
}

function Dropdown({ placeholder, options, className, onChange }: Props) {
  const [selected, setSelected] = useState<string>();

  return (
    <Menu as="div" className={`${className} relative inline-block text-left`}>
      <div>
        <Menu.Button className="inline-flex w-full justify-between gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          {selected || placeholder}
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {options.length > 0 &&
              options.map((option, index) => (
                <Menu.Item key={`${index}-${option.value}`}>
                  {({ active }) => (
                    <a
                      onClick={() => {
                        if (onChange) {
                          onChange(option.value);
                        }
                        setSelected(option.label);
                      }}
                      href="#"
                      className={`${
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                      } block px-4 py-2 text-sm`}
                    >
                      {option.label}
                    </a>
                  )}
                </Menu.Item>
              ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

Dropdown.defaultProps = {
  options: [
    { value: 1, label: "Option 1" },
    { value: 2, label: "Option 2" },
  ],
  placeholder: "dropdown placeholder",
  onChange: () => {},
};

export default Dropdown;
