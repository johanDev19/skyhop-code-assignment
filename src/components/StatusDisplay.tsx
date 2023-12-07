import Text from "./Text";

interface Props {
  title: string;
  status: string;
}

function StatusDisplay({ title, status }: Props) {
  return (
    <div>
      <Text as="h6" className="font-medium flex flex-col gap-1">
        {title && <Text as="span">{title}</Text>}
        {status && <span className="text-skyhopGreen">{status}</span>}
      </Text>
    </div>
  );
}

export default StatusDisplay;
