export default function HeaderAbout() {
  return (
    <header className="relative w-full h-full sm:h-[550px] overflow-hidden flex justify-center items-center    ">
      <div className="w-[70%] h-full relative mt-12 flex justify-center">
        <div className="md:w-[70%] lg:w-[50%]  h-full flex flex-col justify-center items-start text-black  relative ">
          <h1 className="text-2xl mt-12  mb-6 font-semibold border-b border-solid border-gray-400">Meet Our Team:</h1>
          <h2 className=" text-3xl sm:text-6xl mb-6 font-bold">
            Making things happen
            <span className="text-green-400">.</span>
          </h2>
          <p className="text-lg mb-6">
            Get to know the talented individuals who make our team exceptional.
            Each member brings unique skills and perspectives, contributing to
            our shared success.
          </p>
        </div>
      </div>
    </header>
  );
}
