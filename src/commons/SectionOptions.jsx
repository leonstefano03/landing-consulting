export default function SectionOptions({ title, subTitle, parraf ,button }) {
  return (
    <section
      id="firstSection"
      className="relative overflow-hidden flex justify-center items-center text-black "
    >
      <div className="w-[70%] h-full relative  ">
        <div className="w-full h-full flex flex-col justify-center items-start  relative">
          <h1 className="text-sm mt-12 text-gray-600  font-semibold border-b border-solid- border-black mb-4">
            {title}
          </h1>
          <span className="text-[#abd373] text-xl "></span>
          <h2 className="text-3xl mb-6 font-bold">{subTitle}</h2>
          <p className="text-base mb-6">{parraf}</p>

          <button className=" smky-btn3 relative py-2 px-6 after:absolute after:h-1 after:hover:h-[300%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-0 after:z-[-20] after:bg-[#abd373] after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-black">
            {button}
          </button>
        </div>
      </div>
    </section>
  );
}
