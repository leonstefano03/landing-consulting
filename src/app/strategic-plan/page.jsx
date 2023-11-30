import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import HeaderStrategicPlan from '@/components/HeaderStrategicPlan';
import SectionContact from '@/components/sectionContact';

export default function Home() {
  return (
    <main className="">
      <Nav />
<HeaderStrategicPlan img={'/experience.jpg'}/>
<SectionContact imgPeople={'/Peoplebyw.jpg'} />
      <Footer/>
    </main>
  );
}
