import Title from "../components/Title";

function Home(): JSX.Element {
  return (
    <section className="container m-auto flex flex-col items-center p-10">
      <div className="flex justify-center">
        <Title underline>Document Upload</Title>
      </div>
      <div className="flex gap-1">
        <div className="flex flex-col gap-2">column 1</div>
        <div className="flex flex-col gap-2">column 2</div>
      </div>
      <div>buttons</div>
    </section>
  );
}

export default Home;
