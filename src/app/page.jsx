import Header from '@/components/Header';
import Nav from '@/components/Nav';
import SectionAfterHeadear from '@/components/SectionAfterHeader';
import SectionHome from '@/components/SectionHome';
import SectionExperience from '@/components/SectionExperience';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="">
      <Nav />
      <Header imgPeople={`/people.jpg`} />
      <SectionAfterHeadear />
      <SectionHome img={'/experience.jpg'}/>
      <SectionAfterHeadear />
      <SectionExperience img={'/background-port.jpg'}/>
      <Footer/>
    </main>
  );
}
