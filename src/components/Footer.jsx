
export default function Footer() {
  const añoActual = new Date().getFullYear()
  return (
    <footer className="flex w-full h-[6vh] bg-gray-900 justify-center items-center text-center">
     <h1 className="text-gray-400">COMPANY-CO LS © {añoActual} | All rights reserved</h1>
    </footer>
  );
}
