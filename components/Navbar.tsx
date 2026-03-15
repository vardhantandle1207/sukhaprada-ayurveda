"use client"

import { useState } from "react"
import Image from "next/image"

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (

    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/30 text-white">

      <div className="relative max-w-6xl mx-auto px-6 py-4 flex items-center justify-center md:justify-between">

        {/* Logo + Title */}

        <div className="flex items-center gap-2 text-center md:text-left">

          <Image
            src="/sukhaprada_logo.png"
            alt="Sukhaprada Ayurveda"
            width={32}
            height={32}
          />

          <div className="leading-tight text-lg md:text-xl font-semibold">
            Sukhaprada Ayurveda
          </div>

        </div>


        {/* Desktop Menu */}

        <div className="hidden md:flex gap-8 text-base">

          <a href="#about" className="hover:opacity-80">About</a>
          <a href="#services" className="hover:opacity-80">Services</a>
          <a href="#book" className="hover:opacity-80">Book</a>
          <a href="#contact" className="hover:opacity-80">Contact</a>

        </div>


        {/* Mobile Hamburger */}

        <button
          className="md:hidden text-2xl absolute right-6"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>


      {/* Mobile Dropdown Menu */}

      {menuOpen && (

        <div className="md:hidden bg-black/80 backdrop-blur-md">

          <div className="flex flex-col items-center py-6 gap-5 text-lg">

            <a href="#about" onClick={()=>setMenuOpen(false)}>About</a>
            <a href="#services" onClick={()=>setMenuOpen(false)}>Services</a>
            <a href="#book" onClick={()=>setMenuOpen(false)}>Book</a>
            <a href="#contact" onClick={()=>setMenuOpen(false)}>Contact</a>

          </div>

        </div>

      )}

    </nav>

  )
}