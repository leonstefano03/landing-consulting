import SectionOptions from '../commons/SectionOptions';

export default function SectionAfterHeadear() {
  return (
    <section id='firstSection' className="flex w-full justify-center items-center mb-12">
      <div className=" md:w-[80%] flex md:flex-row flex-col">
        <div className="md:w-1/2">
          <SectionOptions
            title={'STRATEGIC PLAN'}
            subTitle={'Do you want to grow sustainably and lastingly?'}
            parraf={
              'We help you achieve sustained growth over time and that is sustainable with the environment, thanks to the adoption of key decisions in different areas of the business.'
            }
          />
        </div>
        <div className="md:w-1/2">
          <SectionOptions
            title={'STRATEGIC IMPLEMENTATION'}
            subTitle={'Do you have a shared vision of the strategy?'}
            parraf={
              'We will hardly be able to obtain the results we want if the people in our organization do not know where we want to go. And the results of a company are a consequence of the sum of the actions of the people who make it up.'
            }
          />
        </div>
      </div>
    </section>
  );
}
