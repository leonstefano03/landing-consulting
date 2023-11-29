import Footer from '@/components/Footer';
import HeaderAbout from '@/components/HeaderAbout';
import Nav from '@/components/Nav';
import SectionAbout from '@/components/SectionAbout';
import SectionAboutInfo from '@/components/SectionAboutInfo';
import SectionContact from '@/components/sectionContact';

export default function AboutUs() {
  return (
    <main>
      <Nav />
      <HeaderAbout />
      <SectionAbout
        hoverBottonTextColor={'text-black'}
        titleColor={'text-gray-600'}
        textColor={'text-black'}
        bg={'bg-gray-300'}
        button={'CONTACT'}
        title={'FOUNDING-PARTNER'}
        subTitle={'León Stéfano'}
        parraf={
          'Industrial Engineer from the Universitat Jaume I (UJI, Spain) and the Institut National des Sciences Appliquées de Lyon (INSA de Lyon, France). Fernando Dolz has experience in strategic and business consulting, working on strategic definition and implementation projects for clients from different sectors.'
        }
        src={'/empresario1.png'}
      />
      <SectionAbout
        hoverBottonTextColor={'text-black'}
        titleColor={'text-gray-700'}
        textColor={'text-black'}
        bg={'bg-gray-400'}
        button={'CONTACT'}
        title={'SENIOR-CONSULTANT'}
        subTitle={'Martina Salvador'}
        parraf={
          'Industrial Engineer from the Universitat Jaume I (UJI, Spain) and the Institut National des Sciences Appliquées de Lyon (INSA de Lyon, France). Fernando Dolz has experience in strategic and business consulting, working on strategic definition and implementation projects for clients from different sectors.'
        }
        src={'/empresario2.png'}
      />
      <SectionAboutInfo />
      <SectionContact imgPeople={'/Peoplebyw.jpg'} />
      <Footer/>
    </main>
  );
}
