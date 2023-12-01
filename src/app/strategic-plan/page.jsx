import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import HeaderStrategicPlan from '@/components/HeaderStrategicPlan';
import SectionContact from '@/components/sectionContact';
import SectionInfoSP from '@/components/SectionInfoSP';

export default function Home() {
  return (
    <main className="">
      <Nav />
      <HeaderStrategicPlan
        img={'/team-arbol.avif'}
        title={'STRATEGY AND SUPPORT TO MANAGEMENT'}
        subTitleOne={'What do you want your company to be like in 3 years?'}
        subTitleTwo={
          'Are you clear about the direction you should follow and the actions to get there?'
        }
        subTitleThree={
          'Does your companys management team have a shared vision of the future?'
        }
        titleTwo={
          'We help you define a strategy for growth sustainable and durable'
        }
      />
      <SectionInfoSP />
      <SectionContact imgPeople={'/Peoplebyw.jpg'} />
      <Footer />
    </main>
  );
}
