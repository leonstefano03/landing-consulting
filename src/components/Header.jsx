export default function Header({ imgPeople }) {
  return (
    <header
      className=" w-full h-[1000px] xl:h-[640px] lg:h-[600px] md:h-[540px] bg-cover bg-center top-0"
      style={{
        backgroundImage: `url(${imgPeople})`,
        transform: `translate(0px)`, // Corregir la llamada a la función translate
      }}
    >
    </header>
  );
}
