export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-[#F6F3EC]">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl text-center mb-16">
          Ayurvedic Treatments
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl mb-3">Panchakarma</h3>
            <p className="text-gray-600">
              Traditional detoxification therapies designed to cleanse and rejuvenate the body.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl mb-3">Abhyanga</h3>
            <p className="text-gray-600">
              Herbal oil massage that improves circulation, relaxation, and balance.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl mb-3">Shirodhara</h3>
            <p className="text-gray-600">
              A calming therapy involving warm oil poured on the forehead to relieve stress.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl mb-3">Digestive Care</h3>
            <p className="text-gray-600">
              Ayurvedic treatments focused on gut health and digestive balance.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl mb-3">Skin Treatments</h3>
            <p className="text-gray-600">
              Natural Ayurvedic therapies for improving skin health and vitality.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl mb-3">Stress Management</h3>
            <p className="text-gray-600">
              Therapies designed to restore mental calm and emotional balance.
            </p>
          </div>

        </div>

      </div>

    </section>
  )
}