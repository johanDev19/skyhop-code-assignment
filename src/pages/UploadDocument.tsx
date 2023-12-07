import Button from "../components/Button";
import Radio from "../components/Radio";
import Divider from "../components/Divider";
import Dropdown from "../components/Dropdown";
import StatusDisplay from "../components/StatusDisplay";
import Text from "../components/Text";
import ToleranceWindow from "../components/ToleranceWindow";

function UploadDocument(): JSX.Element {
  return (
    <section className="container m-auto flex flex-col items-center p-10 gap-10">
      <div className="flex justify-center">
        <Text as="h1" className="text-3xl" underline>
          Document Upload
        </Text>
      </div>
      <div className="flex gap-20 justify-around w-full">
        <div className="flex flex-col gap-2 w-full">
          <Dropdown placeholder="Select Import Name:" options={[]} />
          <Divider className="!w-[50%]" />
          <div>Drag and drop component here</div>
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
  );
}

export default UploadDocument;
