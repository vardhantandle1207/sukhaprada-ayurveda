export default function Footer() {
  return (
    <footer id="contact" className="py-16 px-6 bg-[#F6F3EC] border-t">

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        {/* Clinic */}
        <div>
          <h3 className="text-xl mb-3">Sukhaprada Ayurveda</h3>
          <p className="text-gray-600">
            Holistic Ayurvedic healing focused on restoring balance and wellbeing.
          </p>
        </div>

        {/* Doctor */}
        <div>
          <h3 className="text-lg mb-3">Doctor</h3>
          <p className="text-gray-600">
            Dr. Akshay Tandle
          </p>
          <p className="text-gray-600">
            BAMS, MD Ayurveda
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg mb-3">Contact</h3>
          <p className="text-gray-600">
            Phone: Coming Soon
          </p>
          <p className="text-gray-600">
            Email: sukhapradaayu@gmail.com
          </p>
        </div>

      </div>

      <div className="text-center text-sm text-gray-500 mt-12">
        © {new Date().getFullYear()} Sukhaprada Ayurveda
      </div>

    </footer>
  )
}