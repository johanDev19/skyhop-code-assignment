import { useState } from "react";

import Text from "./Text";

interface Options {
  label: string;
  value: string;
}

interface Props {
  onChange: (value: string | undefined) => void | Promise<void> | undefined;
  options: Options[];
  title?: string;
}

function Radio({ onChange, options, title }: Props) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
    onChange(event.target.value);
  };

  return (
    <div className="flex flex-col gap-2">
      {title && <Text as="h6">{title}</Text>}
      <div className="flex gap-5">
        {options.map((option, index) => (
          <label
            className="flex items-center gap-1 cursor-pointer"
            key={`${index}-${option.value}}`}
          >
            <input
              type="radio"
              name="options"
              value={option.value}
              onChange={handleOptionChange}
              className="hidden"
            />
            {selectedOption === option.value && (
              <div className="w-5 h-5 relative bg-white flex justify-center items-center border-skyhopBlue border-2 rounded-full ">
                <div className="w-3 h-3 bg-skyhopBlue rounded-full"></div>
              </div>
            )}
            {selectedOption !== option.value && (
              <div className="w-5 h-5 relative  bg-white flex justify-center items-center border-gray-300 border-2 rounded-full " />
            )}
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );
}

Radio.defaultProps = {
  onChange: () => {},
  options: [],
};

export default Radio;
