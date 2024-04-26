const Home = () => {
  return (
    <section className="bg-primary-bg">
      <div className="container-wrapper text-center">
        <h1 className="text-lg md:text-5xl text-center font-bold my-36 border inline-block p-28 bg-secondary-bg rounded-2xl shadow-md ">
          <div className="mb-5">
            <span className="text-text-color">Wel</span>
            <span className="text-text-color3">come!!!</span>
          </div>
        </h1>
        <div className=" text-center">
          <div className="text-start inline-block">
            <div className="text-text-color ">
              username: "jhon_doe@ultrareact.com"
            </div>
            <div className="text-text-color3">password:   "ultra-jhon"</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
