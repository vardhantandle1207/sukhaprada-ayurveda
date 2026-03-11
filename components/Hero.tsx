export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center text-center pt-24">
      <img
        src="/ayurveda-hero.jpg"
        alt="Ayurveda herbs"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/35"></div>

      <div className="relative text-white max-w-3xl px-6">

        <h1 className="text-5xl md:text-6xl mb-6 leading-tight">
          Holistic Healing
          <br />
          Through Ayurveda
        </h1>

        <p className="text-lg opacity-90">
          Personalized Ayurvedic consultations and therapies focused on restoring balance and wellbeing.
        </p>

        <button className="mt-8 px-7 py-3 bg-white text-green-900 rounded-full font-medium">
          Book Consultation
        </button>

      </div>

    </section>
  )
}