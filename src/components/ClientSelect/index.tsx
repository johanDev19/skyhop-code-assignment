import { useState } from "react";
import { ClockIcon } from "@heroicons/react/20/solid";

import Dropdown from "./../UI/Dropdown";
import Radio from "./../UI/Radio";

const CLIENT_LIST = [
  {
    label: "Testing Center 1",
    value: "1",
  },
  {
    label: "Testing Center 2",
    value: "2",
  },
  {
    label: "Testing Center 3",
    value: "3",
  },
  {
    label: "Testing Center 4",
    value: "4",
  },
];

interface Props {
  onChange: (value: string) => void;
}

function ClientSelect({ onChange }: Props): JSX.Element {
  const [selectType, setSelectType] = useState("single");

  const dropdownOptions = [
    {
      title: "Testing Center 1",
      placeHolder: "Testing Center 1",
      options: CLIENT_LIST,
    },
    {
      title: "Testing Center 2",
      placeHolder: "Testing Center 2",
      options: CLIENT_LIST,
    },
    {
      title: "Testing Center 3",
      placeHolder: "Testing Center 3",
      value: "3",
      options: CLIENT_LIST,
    },
    {
      title: "Testing Center 4",
      placeHolder: "Testing Center 4",
      value: "4",
      options: CLIENT_LIST,
    },
  ];

  return (
    <>
      <Radio
        onChange={setSelectType}
        options={[
          { label: "Single", value: "single" },
          { label: "Multiple", value: "multiple" },
        ]}
        title="Client:"
      />
      <div className="flex flex-col mt-3 gap-4">
        {selectType === "single" &&
          dropdownOptions?.splice(0, 1).map((option, index) => (
            <div
              className="flex items-center gap-10"
              key={`${index}-${option.title}}`}
            >
              <span>{option.title}</span>
              <div className="flex items-center gap-2">
                <Dropdown
                  options={option.options}
                  placeholder="Select Client"
                  onChange={onChange}
                />
                <ClockIcon className="w-4 h-4" />
              </div>
            </div>
          ))}
        {selectType === "multiple" &&
          dropdownOptions.map((option, index) => (
            <div
              className="flex items-center gap-10"
              key={`${index}-${option.title}}`}
            >
              <span>{option.title}</span>
              <div className="flex items-center gap-2">
                <Dropdown
                  options={option.options}
                  placeholder="Select Client"
                  onChange={onChange}
                />
                <ClockIcon className="w-4 h-4" />
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default ClientSelect;
