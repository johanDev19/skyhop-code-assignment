import { useEffect, useState } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";

import Button from "../../components/UI/Button";
import Radio from "../../components/UI/Radio";
import Divider from "../../components/UI/Divider";
import Dropdown from "../../components/UI/Dropdown";
import StatusDisplay from "../../components/StatusDisplay";
import Text from "../../components/UI/Text";
import ToleranceWindow from "../../components/ToleranceWindow";
import ClientSelect from "../../components/ClientSelect";
import DragDropFile from "../../components/DragDropFile";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

function UploadDocumentModal({ isOpen, onClose }: Props): JSX.Element {
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  if (!showModal) return <></>;

  return (
    <div className="bg-[#b3b3b3] absolute top-0 left-0 w-full h-full flex justify-center items-start">
      <section className="bg-white container m-auto flex flex-col items-center p-10 pt-20 gap-10 rounded-3xl relative">
        <div
          role="button"
          className="flex  self-start absolute top-10 left-10 cursor-pointer"
          onClick={() => {
            setShowModal(false);
            onClose();
          }}
        >
          <div className="flex w-10 h-10 self-start bg-skyhopBlueDark p-2 rounded-xl text-white">
            <XMarkIcon className="w-6 h-6" />
          </div>
        </div>
        <div className="flex justify-center">
          <Text as="h1" className="text-3xl" underline>
            Document Upload
          </Text>
        </div>
        <div className="flex gap-20 justify-around w-full md:flex-row flex-col">
          <div className="flex flex-col gap-2 w-full">
            <Dropdown
              placeholder="Select Import Name:"
              options={[
                { label: "test", value: "1" },
                { label: "test2", value: "2" },
              ]}
            />
            <Divider className="!w-[50%]" />
            <DragDropFile />
            <Divider className="!w-[50%]" />
            <StatusDisplay
              title="Elapse Data Checking:"
              status="No Elapsed Dates!"
            />
            <Divider className="!w-[50%]" />
            <ToleranceWindow onChange={() => {}} />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <Radio
              onChange={console.log}
              options={[
                { label: "Yes", value: "1" },
                { label: "No", value: "2" },
              ]}
              title="Split schedule using social distancing?"
            />
            <Divider className="!w-[50%]" />
            <StatusDisplay title="Location Checking:" status="All Available!" />
            <Divider className="!w-[50%]" />
            <ClientSelect onChange={console.log} />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <Text>
            Data in the import file is correct. Please press Continue to import
          </Text>
          <div className="flex gap-10">
            <Button type="primary" onClick={() => {}}>
              Continue Import
            </Button>
            <Button type="outline" onClick={() => {}}>
              Cancel
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default UploadDocumentModal;
