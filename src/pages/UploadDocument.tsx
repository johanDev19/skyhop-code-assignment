import Button from "../components/Button";
import Divider from "../components/Divider";
import Dropdown from "../components/Dropdown";
import ElapseStatus from "../components/ElapseStatus";
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
          <ElapseStatus isElapseDataPresent />
          <Divider className="!w-[50%]" />
          <ToleranceWindow onChange={() => {}} />
        </div>
        <div className="flex flex-col gap-2 w-full">column 2</div>
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