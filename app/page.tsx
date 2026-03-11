import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Doctor from "@/components/Doctor"
import Services from "@/components/Services"
import BookingCTA from "@/components/BookingCTA"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main>

      <Navbar />

      <Hero />

      <About />

      <Doctor />

      <Services />

      <BookingCTA />

      <Footer />

    </main>
  )
}