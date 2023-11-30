import Image from 'next/image';

export default function SectionAboutInfo() {
  return (
    <section
      className={`flex w-full  md:h-[700px] justify-center items-center relative z-0  text-black`}
    >
      <div className="w-full h-full flex flex-col md:grid md:grid-cols-2 relative mb-[30%] md:mb-0">
        <div className="flex flex-col justify-center  mx-auto mt-[20%] md:mt-0  w-[80%] md:w-1/2 ">
          <h2 className="text-4xl font-medium mb-4">The keys to our work</h2>
          <span className="text-3xl text-green-900 mb-2">_____</span>
          <h3 className="mb-2">
            <span className="text-lg text-green-900 font-semibold">
              Experience :
            </span>
            We have experience in the development and implementation of positive
            impact strategies at an international level.
          </h3>
          <h3 className="mb-2">
            <span className="text-lg text-green-900 font-semibold">
              Adaptability :
            </span>
            We have developed strategic planning projects and sustainable
            development for large national companies and international, public
            administrations and also SMEs and startups.
          </h3>
          <h3 className="mb-2">
            <span className="text-lg text-green-900 font-semibold">
              Effectiveness :
            </span>
            We work with an approach oriented to implementation and results.
            Involving key people and stakeholders.
          </h3>
        </div>
        <div className="flex justify-center md:justify-start items-center">
          <Image
            className="mt-12 md:mt-0 w-[70vw] md:w-[500px] shadow-2xl"
            width={10000}
            height={100}
            src={'/equipoEmpresa.jpeg'}
            alt='team company'
          />
        </div>
      </div>
    </section>
  );
}
