import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function ServicesPage() {
  return (
    <main className="bg-[#F6F3EC]">

      <Navbar />

      <section className="py-28 px-6 text-center">
        <h1 className="text-5xl mb-6">
          Ayurvedic Treatments
        </h1>

        <p className="max-w-2xl mx-auto text-gray-600">
          At Sukhaprada Ayurveda, treatments are designed to restore balance,
          detoxify the body, and promote long-term wellbeing using classical
          Ayurvedic therapies.
        </p>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

          <div>
            <h3 className="text-2xl mb-3">Panchakarma</h3>
            <p className="text-gray-600">
              Panchakarma is a traditional Ayurvedic detoxification therapy that
              removes toxins and restores balance in the body.
            </p>
          </div>

          <div>
            <h3 className="text-2xl mb-3">Abhyanga</h3>
            <p className="text-gray-600">
              A therapeutic oil massage that improves circulation, nourishes
              tissues, and promotes relaxation.
            </p>
          </div>

          <div>
            <h3 className="text-2xl mb-3">Shirodhara</h3>
            <p className="text-gray-600">
              Warm herbal oil poured on the forehead to calm the mind and
              relieve stress and anxiety.
            </p>
          </div>

          <div>
            <h3 className="text-2xl mb-3">Digestive Care</h3>
            <p className="text-gray-600">
              Ayurvedic treatments designed to strengthen digestion and improve
              gut health.
            </p>
          </div>

          <div>
            <h3 className="text-2xl mb-3">Skin Treatments</h3>
            <p className="text-gray-600">
              Natural Ayurvedic therapies that help improve skin health and
              vitality.
            </p>
          </div>

          <div>
            <h3 className="text-2xl mb-3">Stress Management</h3>
            <p className="text-gray-600">
              Holistic therapies aimed at calming the nervous system and
              improving mental wellbeing.
            </p>
          </div>

        </div>
      </section>

      <Footer />

    </main>
  )
}