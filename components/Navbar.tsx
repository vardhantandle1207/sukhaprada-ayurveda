export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30">
      <div className="max-w-6xl mx-auto px-8 py-6 flex justify-between items-center text-white">

        <h1 className="text-2xl font-semibold">
          Sukhaprada Ayurveda
        </h1>

        <div className="flex gap-8 text-sm">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#book">Book</a>
          <a href="#contact">Contact</a>
        </div>

      </div>
    </nav>
  )
}