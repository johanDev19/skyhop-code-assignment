function Divider({ className }: { className?: string }): JSX.Element {
  return <div className={`w-full bg-gray-300 h-[1px] my-2 ${className}`} />;
}

export default Divider;
