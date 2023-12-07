interface Props {
  onClick: () => void;
  children: React.ReactNode;
}

function ButtonPrimary({ onClick, children }: Props) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="min-w-[200px] bg-skyhopBlue hover:bg-skyhopBlueDark text-white font-bold px-10 py-2 rounded"
    >
      {children}
    </button>
  );
}

export default ButtonPrimary;
