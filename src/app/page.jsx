import Header from "@/components/Header";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <main className="">
     <Nav/>
     <Header imgPeople={`/people.jpg`}/>
     <Header imgPeople={``}/>
    </main>
  )
}
