import Image from 'next/image';

export default function SectionInfoSP() {
  return (
    <section
      className={ `w-[95%] sm:w-[85%] lg:w-[70%] mx-auto h-full flex flex-col sm:grid sm:grid-cols-2 text-black`}
    >
      <div className="flex justify-center  items-center my-6">
        <p className="w-3/4 text-lg p-4 border-4 border-green-700 rounded-md">
        Defining a clear roadmap is essential for organizations to
          experience sustained growth over time and sustainable with the
          around. At Co-enable we help you achieve your business objectives
          accompanying you throughout the entire process.
        </p>
      </div>
      <div className="flex justify-center my-6 items-center">
        <Image className='shadow-2xl' width={300} height={0} src={'/equipoEmpresa.jpeg'} alt="img" />
      </div>
      <div className="mx-4 my-6 sm:my-0">
        <h2 className='inline text-lg border-b-4 border-green-800 pb-1 '>OUR OBJETIVE</h2>
        <p className='mt-4'>
        Faced with such a changing environment where new technologies,
          geopolitics and awareness for caring for the planet catalyze
          The change of traditional business models is essential
          have a clear, concise and flexible Strategic Plan to
          get your organization to respond to the challenges of the
          agile and solvent manner. At Co-enable we work at your side,
          involving key people in your organization to define a
          practical, results-oriented strategic plan shared by
          all. After more than 20 years helping companies internationally
          We have been able to verify that for organizations to change,
          People must do it first. Therefore, we work from a
          collaborative perspective integrating with the team to achieve the
          commitment of people to the strategy.
        </p>
      </div>
      <div className="mx-4 my-6 sm:my-0">
        <h2 className='inline text-lg border-b-4 border-green-800 pb-1 '>OUR METHODOLOGY</h2>
        <p className='mt-4'>
        Faced with such a changing environment where new technologies,
          geopolitics and awareness for caring for the planet catalyze
          The change of traditional business models is essential
          have a clear, concise and flexible Strategic Plan to
          get your organization to respond to the challenges of the
          agile and solvent manner. At Co-enable we work at your side,
          involving key people in your organization to define a
          practical, results-oriented strategic plan shared by
          all. After more than 20 years helping companies internationally
          We have been able to verify that for organizations to change,
          People must do it first. Therefore, we work from a
          collaborative perspective integrating with the team to achieve the
          commitment of people to the strategy.
        </p>
      </div>
    </section>
  );
}
