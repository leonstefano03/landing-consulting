import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import HeaderStrategicPlan from '@/components/HeaderStrategicPlan';
import SectionContact from '@/components/sectionContact';
import SectionInfoSI from '@/components/SectionInfoSI';

export default function Home() {
  return (
    <main className="">
      <Nav />
      <HeaderStrategicPlan
        img={'/stonk.png'}
        title={'IMPLEMENTATION OF THE STRATEGY'}
        subTitleOne={'Do you want to make a change in your organization?'}
        subTitleTwo={'Do you need to involve your team?'}
        subTitleThree={"Don't know how to lead the process?"}
        titleTwo={
          'We design with you a tailored action plan to turn the strategy into reality'
        }
      />
      <SectionInfoSI/>
      <SectionContact imgPeople={'/Peoplebyw.jpg'} />
      <Footer />
    </main>
  );
}
