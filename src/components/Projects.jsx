export default function Projects() {
  return (
    <div className="w-full h-full block justify-center items-center text-center py-10 bg-gray-100">
      <h1 className="text-3xl font-bold  py-8">Projects</h1>
      <div className="w-full h-full px-4 ">
        <div>
          <a
            href="https://crazee-burger-eosin-rho.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="rounded-xl  h-48 w-full object-cover"
              src="/crazee-burger.png"
              alt="crazee-burger"
            />
            <h2 className="font-bold py-5 text-xl">Crazee Burger</h2>
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
              className="rounded-xl h-48 w-full object-cover"
              src="/Sushi-sensation.png"
              alt="Sushi-sensation"
            />
            <h2 className="font-bold py-5 text-xl">Sushi Sensation</h2>
            <p className="pb-10">
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
              className="rounded-xl h-48 w-full object-cover"
              src="/netflix-port.png"
              alt="netflix-port"
            />
            <h2 className="font-bold py-5 text-xl">Netflix clone</h2>
            <p className="pb-10">See what's next.</p>
          </a>
        </div>
      </div>
    </div>
  );
}
