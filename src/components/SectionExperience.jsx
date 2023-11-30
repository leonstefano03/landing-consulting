import Image from 'next/image';
import Triangle from '../commons/TriangleBackground';
import Link from 'next/link';

export default function SectionExperience({ img }) {
  return (
    <section className="flex w-full h-screen  justify-center items-center mb-12  relative z-0">
      <Triangle img={img} />
      <div className="w-full h-[80%] md:h-[66%] z-10 flex flex-col text-black justify-center items-center ">
        <h2 className="border-b border-solid border-black mb-4 pb-2  font-bold text-lg text-gray-600">
        THEY HAVE TRUSTED US
        </h2>
        <h1 className="font-medium text-4xl mb-8">Success stories</h1>
        <div className="grid md:grid-cols-4  grid-cols-2 gap-10">
          <div className="w-[100px] h-[100px]  flex items-center justify-center">
            <Image width={150} height={0} src={'/amadeus.png'} alt='company experience'/>
          </div>
          <div className="w-[100px] h-[100px] flex items-center justify-center">
            <Image width={150} height={0} src={'/APCartagena.png'}  alt='company experience'/>
          </div>
          <div className="w-[100px] h-[100px] flex items-center justify-center">
            <Image width={150} height={0} src={'/CPS1.webp'}  alt='company experience'/>
          </div>
          <div className="w-[100px] h-[100px] flex items-center justify-center">
            <Image width={100} height={0} src={'/grupo-simetria.webp'}  alt='company experience'/>
          </div>
          <div className="w-[100px] h-[100px] hidden  md:visible md:flex items-center justify-center">
            <Image width={150} height={0} src={'/PortCastelló.webp'}  alt='company experience'/>
          </div>
          <div className="w-[100px] h-[100px] hidden  md:visible md:flex items-center justify-center ">
            <Image width={150} height={0} src={'/puertos-del-estado.png'}  alt='company experience'/>
          </div>
          <div className="w-[100px] h-[100px] hidden  md:visible md:flex items-center justify-center">
            <Image
              className="relative top-[-20px]"
              width={150}
              height={0}
              src={'/logo.webp'}
              alt='company experience'
            />
          </div>
          <div className="w-[150px] h-[150px]  hidden  md:visible md:flex items-center justify-center">
            <Image width={150} height={0} src={'/logo-Innova.png'}  alt='company experience'/>
          </div>
        </div>
       <Link href={'/about-us'}> <button className="mt-8 w-[200px] bg-black smky-btn3 relative py-2 px-6 after:absolute after:h-1 after:hover:h-[400%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-0 after:z-[-20] after:bg-[#abd373] after:rounded-t-full after:w-full after:bottom-0 after:left-0  text-white hover:text-black"
        >
        DISCOVER MORE
        </button>
        </Link>      </div>
    </section>
  );
}
