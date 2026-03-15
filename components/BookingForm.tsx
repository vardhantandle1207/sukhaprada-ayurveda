"use client"

import { useState } from "react"

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    age: "",
    gender: "",
    date: "",
    time: "",
    mode: "",
    message: ""
  })

  const times = [
    "08:00 AM","09:00 AM","10:00 AM","11:00 AM","12:00 PM","01:00 PM",
    "04:00 PM","05:00 PM","06:00 PM","07:00 PM","08:00 PM"
  ]

  const handleChange = (e:any) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const sendEmail = () => {

  const subject = "New Appointment Request from " + form.name

  const body = `
Name: ${form.name}
Phone: ${form.phone}
Age: ${form.age}
Gender: ${form.gender}
Mode: ${form.mode}
Date: ${form.date}
Time: ${form.time}
Message: ${form.message}
`

  window.location.href =
    `mailto:sukhapradaayu@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

  const handleSubmit = (e:any) => {
    e.preventDefault()

    const text = `
New Appointment
Name: ${form.name}
Phone: ${form.phone}
Age: ${form.age}
Gender: ${form.gender}
Mode: ${form.mode}
Date: ${form.date}
Time: ${form.time}
Message: ${form.message}
`

    const whatsapp = `https://wa.me/9440203588?text=${encodeURIComponent(text)}`
    window.open(whatsapp,"_blank")
  }

  return (
    <section id="book" className="py-20 bg-[#F6F3EC]">
      <div className="max-w-2xl mx-auto px-6">

        {/* <h2 className="text-4xl font-serif text-center mb-10">
          Book Appointment
        </h2> */}

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            name="name"
            placeholder="Full Name"
            required
            className="w-full border p-3 rounded"
            onChange={handleChange}
          />

          <input
            name="phone"
            placeholder="Phone Number"
            required
            className="w-full border p-3 rounded"
            onChange={handleChange}
          />

          <div className="grid grid-cols-2 gap-4">
            <input
              name="age"
              placeholder="Age"
              required
              className="border p-3 rounded"
              onChange={handleChange}
            />

            <select
              name="gender"
              required
              className="border p-3 rounded"
              onChange={handleChange}
            >
              <option value="">Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          <select
            name="mode"
            required
            className="w-full border p-3 rounded"
            onChange={handleChange}
          >
            <option value="">Consultation Mode</option>
            <option>Offline (Clinic Visit)</option>
            <option>Online Consultation</option>
          </select>

          <input
            type="date"
            name="date"
            required
            className="w-full border p-3 rounded"
            onChange={handleChange}
          />

          <select
            name="time"
            required
            className="w-full border p-3 rounded"
            onChange={handleChange}
          >
            <option value="">Select Time</option>
            {times.map((t,i)=>(
              <option key={i}>{t}</option>
            ))}
          </select>

          <textarea
            name="message"
            placeholder="Health concern (optional)"
            className="w-full border p-3 rounded"
            onChange={handleChange}
          />

          <div className="flex gap-4">

          <button
          type="submit"
          className="w-full bg-[#2F5D50] text-white py-3 rounded-lg"
          >
          Book via WhatsApp
          </button>

          <button
          type="button"
          onClick={sendEmail}
          className="w-full border border-[#2F5D50] text-[#2F5D50] py-3 rounded-lg"
          >
          Send via Email
          </button>

          </div>

        </form>

        <p className="text-center text-sm mt-4 text-gray-600">
          Clinic Timings: 8 AM – 1 PM & 4 PM – 9 PM
        </p>

      </div>
    </section>
  )
}