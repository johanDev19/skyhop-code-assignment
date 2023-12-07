interface Props {
  onClick: () => void;
  children: React.ReactNode;
}

function ButtonPrimary({ onClick, children }: Props): JSX.Element {
  return (
    <button
      onClick={onClick}
      type="button"
      className="whitespace-nowrap w-full max-w-[200px] bg-skyhopBlue hover:bg-skyhopBlueDark text-white font-bold px-10 py-2 rounded"
    >
      {children}
    </button>
  );
}

export default ButtonPrimary;
