import Dropdown from "../components/Dropdown";
import Title from "../components/Title";

function Home(): JSX.Element {
  return (
    <section className="container m-auto flex flex-col items-center p-10 gap-10">
      <div className="flex justify-center">
        <Title underline>Document Upload</Title>
      </div>
      <div className="flex gap-20 justify-around w-full">
        <div className="flex flex-col gap-2 w-full">
          <Dropdown placeholder="Select Import Name:" options={[]} />
        </div>
        <div className="flex flex-col gap-2 w-full">column 2</div>
      </div>
      <div>buttons</div>
    </section>
  );
}

export default Home;
