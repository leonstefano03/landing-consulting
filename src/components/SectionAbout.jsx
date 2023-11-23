import SectionOptions from '@/commons/SectionOptions';
import Triangle from '../commons/TriangleBackground';
import Image from 'next/image';

export default function SectionAbout({ img }) {
  return (
    <section className="flex w-full h-screen md:h-[700px] justify-center items-center mb-12  relative z-0 bg-gray-300">
      <Triangle img={img} />
     <div className='w-full h-full flex flex-col md:grid md:grid-cols-2 overflow-hidden'>
      <div className="w-full h-[60%] mt-14 md:my-auto md:ml-[10%]  flex text-black justify-center   ">
       <SectionOptions button={'CONTACT'} title={'consultor senior de co enable'} subTitle={'Leon Stefano'} parraf={'Ingeniero Industrial por la Universitat Jaume I (UJI, España) y el Institut National des Sciences Appliquées de Lyon (INSA de Lyon, Francia). Fernando Dolz cuenta con experiencia en consultoría estratégica y de negocio, trabajando en proyectos de definición e implantación estratégica en clientes de diferentes sectores.'}/>
      </div>  
      <div className=' w-full h-[40%] = md:h-full flex items-end justify-center '>
        <Image className=' top-12 w-[50vw] sm:w-[40vw] md:w-[400px] ' width={1000 } height={0} src={'/empresario1.png'} />
      </div></div>
        </section>
  );
}
 