import SectionOptions from './SectionOptions';

export default function SectionAfterHeadear() {
  return (
    <section id='firstSection' className="flex w-full justify-center items-center mb-12">
      <div className=" md:w-[80%] flex md:flex-row flex-col">
        <div className="md:w-1/2">
          <SectionOptions
            title={'PLAN ESTRATÉGICO'}
            subTitle={'¿Quieres crecer de forma sostenible y duradera?'}
            parraf={
              'Te ayudamos a lograr un crecimiento sostenido en el tiempo y sostenible con el entorno, gracias a la adopción de decisiones clave en diferentes ámbitos del negocio.'
            }
          />
        </div>
        <div className="md:w-1/2">
          <SectionOptions
            title={'IMPLANTACIÓN ESTRATÉGICA'}
            subTitle={'¿Tienes una visión compartida de la estrategia?'}
            parraf={
              'Difícilmente podremos obtener los resultados que queremos si las personas de nuestra organización no conocen a dónde queremos llegar. Y es que los resultados de una empresa son consecuencia de la suma de las actuaciones de las personas que la componen.'
            }
          />
        </div>{' '}
      </div>
    </section>
  );
}
