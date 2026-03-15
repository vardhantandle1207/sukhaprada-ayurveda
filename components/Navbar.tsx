"use client"

import { useState } from "react"
import Image from "next/image"

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30">

      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between text-white">

        {/* Logo + Name */}
        <div className="flex items-center gap-3">
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
        <div className="hidden md:flex gap-8 text-base">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#book">Book</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 text-white flex flex-col items-center gap-6 py-6">

          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#book" onClick={() => setMenuOpen(false)}>Book</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>

        </div>
      )}

    </nav>
  )
}