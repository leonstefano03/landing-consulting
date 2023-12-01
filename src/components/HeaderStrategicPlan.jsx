import Image from 'next/image';
import Link from 'next/link';

export default function HeaderStrategicPlan({ img }) {
  return (
    <header className=" relative w-full h-[1000px] md:h-[800px]  overflow-hidden flex justify-start">
      <div
        className="w-full h-[90%] absolute inset-0 bg-fixed bg-cover bg-center z-0  "
        style={{
          backgroundImage: `url(${img})`,
          filter: 'blur(3px)',
        }}
      />
      <div className="relative left-[10vw] md:left-[13vw] xl:w-[30%] md:w-[50%] w-[80%] h-[70%] flex flex-col items-start justify-center text-black z-5 ">
        <div className='bg-white p-4 rounded-lg bg-opacity-50 '> <h1 className="text-2xl mb-5">STRATEGY AND SUPPORT TO MANAGEMENT</h1>
        <p className="text-xl text-gray-800 font-medium border-l-4 border-solid- border-green-800 pl-2 mb-4">
        What do you want your company to be like in 3 years?
        </p>
        <p className="text-xl  text-gray-800 ffont-medium border-l-4 border-solid- border-green-800 pl-2 mb-4">
        Are you clear about the direction you should follow and the actions to get there?
        </p>
        <p className="text-xl  text-gray-800 ffont-medium border-l-4 border-solid- border-green-800  pl-2">
        Does your company's management team have a shared vision of the future?
        </p>
      </div></div>
      <section className="absolute bottom-0 w-full z-5 flex flex-col justify-between">
        <Image
          className="z-5"
          layout="responsive"
          width={0}
          height={0}
          src={'/triangleGrayDown.svg'}
          alt="tiangle white up"
        />
        <div className="w-full h-full bg-[#212121] flex flex-col justify-center items-center ">
          <div className=" relative w-[60%] h-full flex flex-col justify-center items-center text-center top-[20px] md:top-[50px]">
            <h2 className="text-xl font-semibold text-gray-300">
            We help you define a strategy for growth sustainable and durable
            </h2>
            <Link href={'/contact'}>
              <button className="mt-3 w-[200px] md:bg-transparent smky-btn3 relative py-2 px-6 after:absolute after:h-1 after:hover:h-[400%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-0 after:z-[-20] after:bg-[#abd373] after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-gray-300 hover:text-black">
                CONTACT US
              </button>
            </Link>
          </div>
        </div>
        <Image
          className="z-5 bg-white"
          layout="responsive"
          width={0}
          height={0}
          src={'/triangleGrayUp.svg'}
          alt="tiangle white up"
        />
      </section>
    </header>
  );
}
