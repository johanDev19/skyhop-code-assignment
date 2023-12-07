import Text from "./Text";

enum ElapseStatusState {
  NO_STARTED = "No Elapsed Dates!",
  PRESENT = "Elapse Dates Present!",
}

interface Props {
  isElapseDataPresent: boolean;
}

function ElapseStatus({ isElapseDataPresent }: Props) {
  return (
    <div>
      <Text as="h6" className="font-medium flex flex-col gap-1">
        <Text as="span">Elapse Data Checking:</Text>
        <span className="text-skyhopGreen">
          {isElapseDataPresent
            ? ElapseStatusState.PRESENT
            : ElapseStatusState.NO_STARTED}
        </span>
      </Text>
    </div>
  );
}

export default ElapseStatus;
