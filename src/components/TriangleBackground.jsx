import Image from 'next/image';
export default function Triangle({img}) {
  return (
    <section className="w-full h-full absolute flex flex-col justify-between overflow-hidden " >
      <div
        className="left-0 bottom-0 absolute inset-0 bg-cover bg-center z-0  "
        style={{
          backgroundImage: `url(${img})`,
        }}
      />
      <Image   className='absolute top-0 z-0'
       layout="responsive" width={0} height={0} src={'/triangleUp.svg'} />
      <Image
        layout="responsive"
        className='absolute bottom-0 z-0'
        width={0}
        height={0}
        src={'/triangleDown.svg'}
      />
    </section>
  );
}
