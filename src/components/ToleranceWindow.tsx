import { useState } from "react";
import { ClockIcon } from "@heroicons/react/20/solid";

import Text from "./Text";

interface Props {
  onChange: (isChecked: boolean) => void;
}
function ToleranceWindow({ onChange }: Props) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <Text as="h6">Tolerance Window:</Text>
      <div className="flex items-center">
        <label htmlFor="toggle" className="flex items-center cursor-pointer">
          <div className="relative">
            <input
              id="toggle"
              type="checkbox"
              className="hidden"
              checked={isChecked}
              onChange={() => {
                setIsChecked(!isChecked);
                onChange(!isChecked);
              }}
            />
            <div
              className={`toggle__line w-12 h-6 rounded-full ${
                isChecked ? "bg-skyhopBlue" : "bg-gray-300"
              }`}
            ></div>
            <div
              className={`toggle__dot absolute w-6  border-2 h-6 rounded-full shadow top-0 left-0 transition transform duration-300 ${
                isChecked ? "bg-white border-skyhopBlue" : "bg-white"
              } ${isChecked ? "translate-x-6" : ""}`}
            ></div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Text as="span" className="!text-skyhopBlue text-xs ml-2">
              Toggle {isChecked ? "ON" : "OFF"}
            </Text>
            <div className="flex items-center gap-3 justify-center">
              | <ClockIcon className="w-4 h-4" /> Select Tolerance Level
            </div>
          </div>
        </label>
      </div>
    </>
  );
}

export default ToleranceWindow;
