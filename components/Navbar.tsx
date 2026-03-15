import Image from "next/image"

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-white">

        <div className="flex items-center gap-3">
          <Image
            src="/sukhaprada_logo.png"
            alt="Sukhaprada Ayurveda"
            width={36}
            height={36}
          />

          <h1 className="text-xl md:text-2xl font-semibold">
            Sukhaprada Ayurveda
          </h1>
        </div>

        <div className="md:hidden text-xl">
        ☰
        </div>

        <div className="fhidden md:flex gap-8 text-base">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#book">Book</a>
          <a href="#contact">Contact</a>
        </div>

      </div>
    </nav>
  )
}