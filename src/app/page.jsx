import Header from "@/components/Header";
import Nav from "@/components/Nav";
import SectionAfterHeadear from "@/components/SectionAfterHeader";

export default function Home() {
  return (
    <main className="">
     <Nav/>
     <Header imgPeople={`/people.jpg`}/>
    <SectionAfterHeadear/>
    <Header imgPeople={`/people.jpg`}/>

    </main>
  )
}
