import ButtonPrimary from "./ButtonPrimary";
import ButtonOutline from "./ButtonOutline";

interface Props {
  children: React.ReactNode;
  onClick: () => void;
  type?: "primary" | "outline";
}

function Button({ children, onClick, type }: Props): JSX.Element {
  if (type === "primary") {
    return <ButtonPrimary onClick={onClick}>{children}</ButtonPrimary>;
  }

  return <ButtonOutline onClick={onClick}>{children}</ButtonOutline>;
}

Button.defaultProps = {
  type: "primary",
};

export default Button;
