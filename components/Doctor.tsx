export default function Doctor() {
  return (
    <section id="doctor" className="py-24 px-6 bg-white">

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Doctor Image */}
        <div>
          <img
            src="/doctor-placeholder.jpg"
            alt="Dr Akshay Tandle"
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Doctor Info */}
        <div>


          <h3 className="text-xl font-medium mb-2">
            Dr. Akshay Tandle
          </h3>

          <p className="text-gray-600 mb-4">
            BAMS, MD Ayurveda
          </p>

          <p className="text-gray-700 leading-relaxed">
            Dr. Akshay Tandle practices classical Ayurvedic diagnosis and
            treatment with a focus on digestive health, lifestyle disorders,
            and holistic wellness. His approach combines traditional Ayurvedic
            wisdom with personalized care tailored to each patient.
          </p>

        </div>

      </div>

    </section>
  )
}