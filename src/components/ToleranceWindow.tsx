import { useState } from "react";
import { Switch } from "@headlessui/react";
import { ClockIcon } from "@heroicons/react/20/solid";
import Text from "./Text";

interface Props {
  onChange: (isChecked: boolean) => void;
}
function ToleranceWindow({ onChange }: Props) {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="flex flex-col items-start">
      <Text as="h6">Tolerance Window:</Text>
      <div className="flex mt-2">
        <Switch
          checked={enabled}
          onChange={() => {
            setEnabled(!enabled);
            onChange(!enabled);
          }}
          className={`${
            enabled ? "bg-skyhopBlue" : "bg-gray-200"
          } relative inline-flex h-6 w-11 items-center rounded-full`}
        >
          <span className="sr-only">Enable notifications</span>
          <span
            className={`${
              enabled ? "translate-x-6" : "translate-x-1"
            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
          />
        </Switch>
        <div className="flex items-center justify-center gap-3">
          <Text as="span" className="!text-skyhopBlue text-xs ml-2">
            Toggle {enabled ? "ON" : "OFF"}
          </Text>
          <div className="flex items-center gap-3 justify-center">
            | <ClockIcon className="w-4 h-4" /> Select Tolerance Level
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToleranceWindow;
