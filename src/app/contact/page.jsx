import ContactPage from '@/components/Contact';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';

export default function Contact() {
  return (
    <main>
      <Nav />
<ContactPage imgPeople={'/Peoplebyw.jpg'}/>
<Footer/>
    </main>
  );
}
