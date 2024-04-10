function Home() {
  return (
    <section id="home" className="flex flex-col min-h-svh w-full shadow-sm">
      <div className="container-lg mx-auto my-auto">
        <div className="flex items-center justify-between">
          <div className="flex flex-col w-1/2 max-w-[30rem] items-center justify-center">
            <h1 className="text-black font-bold text-5xl mb-5">
              Fullstack Developer 💻
            </h1>
            <p className="text-black leading-loose text-lg mb-3">
              A POS system that allows customers to shop their way, from online
              to checkout line. 🤔
            </p>
            <div className="flex space-x-5">
              <a href="http://" className="h-10 w-10"></a>
            </div>
          </div>
          <div className="homeImg"></div>
        </div>
      </div>
    </section>
  );
}

export default Home;
