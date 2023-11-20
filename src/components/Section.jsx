export default function Section() {
  return (
    <section
      id="firstSection"
      className="relative w-full h-screen sm:h-[750px] overflow-hidden flex justify-center items-center "
    >
      <div className="w-[70%] h-full relative">
        <div className="w-2/6 h-full flex flex-col justify-center items-start text-white  relative">
          <h1 className="text-xl mt-12  mb-6 font-semibold">
            CONSULTORÍA ESTRATÉGICA
          </h1>
          <h2 className="text-6xl mb-6 font-bold">
            Haciendo que las cosas sucedan .
          </h2>
          <p className="text-lg mb-6">
            Trabajamos para que la estrategia se haga realidad. Más de 20 años
            de experiencia ayudando a empresas de todo el mundo.
          </p>
        </div>
      </div>
    </section>
  );
}
