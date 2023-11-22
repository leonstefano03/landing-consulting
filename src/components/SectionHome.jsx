import Triangle from './TriangleBackground';

export default function SectionHome({ img }) {
  return (
    <section className="flex w-full h-screen md:h-[700px] justify-center items-center mb-12  relative z-0">
      <Triangle img={img} />
      <div className="w-full h-[80%] md:h-[60%] z-10 flex text-black justify-center ">
        <div className="w-[80%] sm:w-[55%] md:w-1/2 h-full sm:ml-[35%] md:ml-[40%] flex flex-col justify-center items-center relative top-[-100px] sm:top-0 text-center">
          <p className="text-lg ">
            El equipo de Co-Enable, encabezado por su director Enrique Vicedo,
            cuenta con una dilatada experiencia internacional con más de 20 años
            de trabajo en consultoría de estratégica que se reparten en más de
            50 países, cubriendo Europa, Latinoamérica, Oriente Medio y África.
          </p>
          <div className="flex justify-between w-full mt-6">
            <div className=" w-[20%]">
              <p className="text-3xl md:text-6xl font-medium text-[#abd373]">
                +20
              </p>
              <p>años de experiencia internacional</p>
            </div>
            <div className=" w-[20%]">
              <p className="text-3xl md:text-6xl font-medium  text-[#abd373]">
                +40
              </p>
              <p>empresas asesoradas</p>
            </div>
            <div className="">
              <p className="text-3xl md:text-6xl font-medium  text-[#abd373]">
                +50
              </p>
              <p>países</p>
            </div>
          </div>
          <button className="mt-6 w-[200px] bg-white md:bg-transparent smky-btn3 relative py-2 px-6 after:absolute after:h-1 after:hover:h-[400%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-0 after:z-[-20] after:bg-[#abd373] after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-black">
            CONÓCENOS
          </button>
        </div>
      </div>
    </section>
  );
}
