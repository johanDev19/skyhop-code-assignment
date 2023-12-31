interface Props {
  children: React.ReactNode;
  onClick: () => void;
}

function ButtonOutline({ onClick, children }: Props): JSX.Element {
  return (
    <button
      onClick={onClick}
      type="button"
      className=" w-full max-w-[200px] text-yellow-500 font-bold px-12 py-4 rounded border-2 border-yellow-500"
    >
      {children}
    </button>
  );
}

export default ButtonOutline;
