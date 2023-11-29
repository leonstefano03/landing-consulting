import SectionOptions from '@/commons/SectionOptions';
import Triangle from '../commons/TriangleBackground';
import Image from 'next/image';

export default function SectionAbout({ img , button, title, subTitle, parraf, bg, src, titleColor, textColor, hoverBottonTextColor }) {
  return (
    <section className={`flex w-full h-screen md:h-[700px] justify-center items-center   relative z-0 ${bg}`}>
      <Triangle img={img} />
     <div className='w-full h-full flex flex-col md:grid md:grid-cols-2 overflow-hidden'>
      <div className="w-full h-[70%] mt-14 md:my-auto md:ml-[10%]  flex text-white justify-center">
       <SectionOptions hoverBottonTextColor={hoverBottonTextColor} titleColor={titleColor} textColor={textColor} button={button} title={title} subTitle={subTitle} parraf={parraf}/>
      </div>  
      <div className=' w-full h-[30%] = md:h-full flex items-end justify-center  '>
        <Image className=' top-12 w-[50vw] sm:w-[40vw] md:w-[400px] ' width={1000 } height={0} src={src} />
      </div></div>
        </section>
  );
}
 