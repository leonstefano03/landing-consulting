import Image from 'next/image';

export default function Header({ imgPeople }) {
  return (
    <header className="relative w-full h-screen sm:h-[750px] overflow-hidden flex justify-center items-center ">
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `url(${imgPeople})`,
          filter: 'blur(5px)',
        }}
      />
      <div className="w-[70%] h-full relative">
        <div className="md:w-[70%] lg:w-[50%]  h-full flex flex-col justify-center items-start text-white  relative">
          <h1 className="text-xl mt-12  mb-6 font-semibold">
          STRATEGIC CONSULTING
          </h1>
          <h2 className=" text-4xl sm:text-6xl mb-6 font-bold">
          Making things happen
            <span className="text-green-400">.</span>
          </h2>
          <p className="text-lg mb-6">
          We work to make the strategy come true. More than 20 years
            of experience helping companies around the world.
          </p>
          <div className="flex justify-center w-full">
            <a href={'#firstSection'} className="">
                <Image
                  width={70}
                  height={100}
                  src={'/arrow_down.png'}
                  className="hover:scale-125  hover:animate-spin cursor-pointer"
                />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
