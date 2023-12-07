function Progress({ progress }: { progress: number }): JSX.Element {
  return (
    <div className="w-full bg-gray-200 h-1 mt-1 rounded-lg">
      <div
        className="w-full h-1 bg-orange-400 rounded-lg"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}

export default Progress;
