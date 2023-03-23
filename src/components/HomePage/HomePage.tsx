import VideoCardList from '../VideoCardList/VideoCardList';

const HomePage = () => {
  return (
    <main className="p-10 overflow-y-auto">
      <h1 className="text-3xl font-bold underline ">Hello world!</h1>
      {/* <!-- main content page --> */}
      <div className="w-full mb-4">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita quam
        odit officiis magni doloribus ipsa dolore, dolores nihil accusantium
        labore, incidunt autem iure quae vitae voluptate, esse asperiores
        aliquam repellat. Harum aliquid non officiis porro at cumque eaque
        inventore iure. Modi sunt optio mollitia repellat sed ab quibusdam quos
        harum!
      </div>
      <VideoCardList />
    </main>
  );
};

export default HomePage;
