import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Section from "@/components/Section";

export default function Home() {
  return (
    <main className="">
     <Nav/>
     <Header imgPeople={`/people.jpg`}/>
     <Section/>
    </main>
  )
}
