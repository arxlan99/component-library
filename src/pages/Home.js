import Card from "../components/Card";

const Home = () => {
  return (
    <div className="mt-16 ">
      <div className="flex justify-center items-center flex-col">
        <div className="text-3xl font-semibold">Stripe Tailwind Component Library</div>
        <div className="w-96 text-center mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dicta quo non similique
          rerum perferendis veniam ratione atque at sed.
        </div>
      </div>
      <div className="text-xl font-semibold my-4">Components</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4">
        <Card icon="🖱️" name="Button" componentCount={5} link="buttons" bgColor="bg-red-300" />
        <Card icon="🔥" name="Modal" componentCount={5} link="modal" bgColor="bg-green-300" />
        <Card icon="🔥" name="Sidebar" componentCount={5} link="sidebars" bgColor="bg-orange-300" />
        <Card icon="🔥" name="Navbar" componentCount={5} link="navbars" bgColor="bg-blue-300" />
        <Card
          icon="📃"
          name="Pagination"
          componentCount={5}
          link="paginations"
          bgColor="bg-teal-300"
        />
        <Card icon="🗃️" name="Tabs" componentCount={5} link="tabs" bgColor="bg-indigo-300" />
        <Card icon="🃏" name="Card" componentCount={5} link="cards" bgColor="bg-rose-300" />
        <Card icon="🔢" name="Inputs" componentCount={5} link="inputs" bgColor="bg-purple-300" />
        <Card icon="🔥" name="Select" componentCount={5} link="selects" bgColor="bg-sky-300" />
        <Card icon="⚠️" name="Alert" componentCount={5} link="alerts" bgColor="bg-pink-300" />
        <Card icon="⚓" name="Spinner" componentCount={5} link="spinners" bgColor="bg-red-400" />
        <Card icon="⚽" name="Footers" componentCount={5} link="footers" bgColor="bg-green-200" />
      </div>
    </div>
  );
};

export default Home;
