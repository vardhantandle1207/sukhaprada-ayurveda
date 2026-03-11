"use client"

import { useState } from "react"

export default function BookingForm() {

  const [date, setDate] = useState("")
  const [time, setTime] = useState("")

  const slots = [
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM"
  ]

  return (
    <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-sm">

      <h3 className="text-2xl mb-6 text-center">
        Schedule Appointment
      </h3>

      {/* Date Picker */}
      <div className="mb-6">
        <label className="block mb-2 text-sm">
          Select Date
        </label>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full border p-3 rounded-md"
        />
      </div>

      {/* Time Slots */}
      <div className="mb-6">
        <label className="block mb-3 text-sm">
          Select Time
        </label>

        <div className="grid grid-cols-3 gap-3">

          {slots.map((slot) => (

            <button
              key={slot}
              onClick={() => setTime(slot)}
              className={`border rounded-md py-2 text-sm
              ${time === slot ? "bg-[#2F5D50] text-white" : "bg-white"}`}
            >
              {slot}
            </button>

          ))}

        </div>
      </div>

      {/* Name */}
      <div className="mb-4">
        <label className="block mb-2 text-sm">
          Name
        </label>

        <input
          type="text"
          placeholder="Your name"
          className="w-full border p-3 rounded-md"
        />
      </div>

      {/* Phone */}
      <div className="mb-6">
        <label className="block mb-2 text-sm">
          Phone
        </label>

        <input
          type="tel"
          placeholder="Phone number"
          className="w-full border p-3 rounded-md"
        />
      </div>

      <button className="w-full bg-[#2F5D50] text-white py-3 rounded-full">
        Confirm Appointment
      </button>

    </div>
  )
}