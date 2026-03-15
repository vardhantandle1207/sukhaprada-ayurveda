"use client"

import { useState } from "react"
import Image from "next/image"

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 text-white">

      <div className="max-w-6xl mx-auto px-6 py-4 relative flex items-center justify-between">

        {/* Logo + Name (CENTER ON MOBILE) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none flex items-center gap-3">

          <Image
            src="/sukhaprada_logo.png"
            alt="Sukhaprada Ayurveda"
            width={36}
            height={36}
          />

          <h1 className="text-xl md:text-2xl font-serif">
            Sukhaprada Ayurveda
          </h1>

        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-base ml-auto">
          <a href="#about" className="hover:opacity-70 transition">About</a>
          <a href="#services" className="hover:opacity-70 transition">Services</a>
          <a href="#book" className="hover:opacity-70 transition">Book</a>
          <a href="#contact" className="hover:opacity-70 transition">Contact</a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden text-2xl ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-60 py-6" : "max-h-0"
        } bg-black/90 flex flex-col items-center gap-6`}
      >
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
        <a href="#book" onClick={() => setMenuOpen(false)}>Book</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </div>

    </nav>
  )
}