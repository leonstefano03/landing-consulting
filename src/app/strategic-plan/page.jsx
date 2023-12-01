import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import HeaderStrategicPlan from '@/components/HeaderStrategicPlan';
import SectionContact from '@/components/sectionContact';
import SectionInfoSP from '@/components/SectionInfoSP';

export default function Home() {
  return (
    <main className="">
      <Nav />
      <HeaderStrategicPlan img={'/team-arbol.avif'} />
      <SectionInfoSP/>
      <SectionContact imgPeople={'/Peoplebyw.jpg'} />
      <Footer />
    </main>
  );
}
