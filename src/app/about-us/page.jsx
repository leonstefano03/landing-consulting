import HeaderAbout from '@/components/HeaderAbout';
import Nav from '@/components/Nav';
import SectionAbout from '@/components/SectionAbout';

export default function Home() {
  return (
    <main className="">
      <Nav />
      <HeaderAbout/>
      <SectionAbout/>
    </main>
  );
}
