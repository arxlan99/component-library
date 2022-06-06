import Card from "../components/Card";

const Home = () => {
  return (
    <div className="mt-16 ">
      <div className="flex justify-center items-center flex-col">
        <div className="text-3xl font-semibold">Component Library</div>
        <div className="w-96 text-center mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dicta
          quo non similique rerum perferendis veniam ratione atque at sed.
        </div>
      </div>
      <div className="text-xl font-semibold my-4">Components</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Home;
