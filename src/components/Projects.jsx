export default function Projects() {
  return (
    <div className="block h-full w-full items-center justify-center bg-gray-100 py-10 text-center sm:px-40  ">
      <h1 className="py-8 text-3xl  font-bold lg:py-20">Projects</h1>
      <div className="h-full w-full px-4 lg:flex lg:h-[400px] lg:justify-center lg:gap-11  2xl:gap-28 ">
        <div>
          <a
            href="https://crazee-burger-eosin-rho.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="h-48  w-full rounded-xl object-cover  2xl:w-[300px]"
              src="/crazee-burger.png"
              alt="crazee-burger"
            />
            <h2 className="py-5 text-xl font-bold">Crazee Burger</h2>
            <p className="pb-10">Des burgers gourmands à portée de clic!</p>
          </a>
        </div>
        <div>
          <a
            href="https://sushi-sensation.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="h-48 w-full rounded-xl object-cover lg:w-[300px] 2xl:w-[300px]"
              src="/Sushi-sensation.png"
              alt="Sushi-sensation"
            />
            <h2 className="py-5 text-xl font-bold">Sushi Sensation</h2>
            <p className="pb-10 2xl:w-[300px]">
              Résistez à la tentation... ou pas, nos sushis sont irrésistibles !
            </p>
          </a>
        </div>
        <div>
          <a
            href="https://netflix-clone-k9aeneoof-nhat-quans-projects.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="h-48 w-full rounded-xl object-cover lg:w-[300px] 2xl:w-[300px]"
              src="/netflix-port.png"
              alt="netflix-port"
            />
            <h2 className="py-5 text-xl font-bold">Netflix clone</h2>
            <p className="pb-10">See what's next.</p>
          </a>
        </div>
      </div>
    </div>
  );
}
