import BookingForm from "./BookingForm"

export default function BookingCTA() {
  return (
    <section id="book" className="py-28 px-6 bg-[#F6F3EC]">
      <div className="max-w-3xl mx-auto text-center">

        <h2 className="text-4xl mb-6">
          Book an Appointment
        </h2>

        <p className="text-gray-600 mb-10">
          Schedule a personalized Ayurvedic consultation with
          Dr. Akshay Tandle.
        </p>
        <p className="text-center text-sm mt-4 text-gray-600">
          Clinic Timings: 8 AM – 1 PM & 4 PM – 9 PM
        </p>


      </div>

      <BookingForm />

    </section>
  )
}