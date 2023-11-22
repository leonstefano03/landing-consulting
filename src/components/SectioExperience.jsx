import Triangle from './TriangleBackground';

export default function SectionExperience({ img }) {
  return (
    <section className="flex w-full h-[700px] justify-center items-center mb-12 bg-slate-600 relative">
      <Triangle img={img} />
      <div className="w-full h-[60%] z-10 flex text-black ">
      
      </div>
    </section>
  );
}
