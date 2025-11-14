import React from 'react'

function About() {
  return (
    <div>
       <div className="text-black">
    
      <section className="relative bg-black text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-3xl font-bold  heding">
            About MechaParts Industries
          </h1>
          <p className="text-lg discription md:text-sm leading-relaxed max-w-3xl mx-auto text-gray-300">
            Engineering precision, reliability, and innovation — shaping the
            future of manufacturing for global industries.
          </p>
        </div>
      </section>

  
      <section className="py-16  app-Shadow">
        <div className="max-w-6xl  text-center  app-Shadow bg-white p-4 rounded-2xl border-2 border-[#e9e9e993] mx-auto px-6 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1000&q=80"
              alt="Manufacturing Facility"
              className="rounded-2xl shadow-md"
            />
          </div>
          <div>
            <h2 className="text-3xl heding font-bold mb-4 text-gray-900">
              Precision in Every Component
            </h2>
            <p className="text-sm  leading-relaxed  discription text-gray-600">
              Founded over a decade ago, MechaParts Industries has evolved from
              a small local workshop into a globally trusted manufacturer of
              high-performance industrial components. We specialize in
              precision-engineered parts used in the automotive, aerospace,
              energy, and heavy machinery sectors.
            </p>
            <p className="text-sm  leading-relaxed discription text-gray-600 mt-4">
              Our philosophy is simple — combine cutting-edge technology with
              expert craftsmanship to deliver components that exceed client
              expectations.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl app-Shadow bg-white p-4 rounded-2xl border-2 border-[#e9e9e993] mx-auto px-6 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-3xl heding text-center font-bold mb-4 text-gray-900">
              Driven by Technology and Innovation
            </h2>
            <p className="text-sm text-center leading-relaxed discription text-gray-600">
              Our production units are equipped with state-of-the-art CNC
              machines, computer-aided design systems, and automated inspection
              technologies. Every stage — from design to delivery — follows
              international quality standards and precision benchmarks.
            </p>
            <p className="text-sm  text-center leading-relaxed discription text-gray-600 mt-4">
              We continually invest in research and technology upgrades to
              provide clients with efficient, cost-effective, and sustainable
              manufacturing solutions.
            </p>
          </div>
          <div>
            <img
              src="https://media.istockphoto.com/id/1344939844/photo/hand-holding-drawing-virtual-lightbulb-with-brain-on-bokeh-background-for-creative-and-smart.jpg?s=2048x2048&w=is&k=20&c=vL6VgSTXd9Xn3d0F8DCD_a9o2LO2O_UcTpHPrs4HaVc="
              alt="Innovation"
              className="rounded-2xl shadow-md"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-700 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10 heding">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Quality Assurance",
                desc: "Every product is tested under rigorous standards to ensure accuracy, strength, and performance.",
              },
              {
                title: "Innovation",
                desc: "We combine modern automation with experienced craftsmanship to build reliable and efficient solutions.",
              },
              {
                title: "Sustainability",
                desc: "We embrace eco-friendly materials, reduce waste, and adopt energy-efficient processes.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-gray-800 rounded-2xl p-8 shadow-md hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold mb-3 heding">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed discription">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl heding font-bold mb-6 text-gray-900">
            Building the Future with Precision
          </h2>
          <p className="text-sm leading-relaxed discription text-gray-600 max-w-3xl mx-auto">
            As we move forward, MechaParts Industries remains committed to
            sustainability, innovation, and excellence. We strive to be a
            driving force in modern engineering — delivering world-class
            manufacturing solutions that empower industries and protect our
            planet.
          </p>
          <p className="text-sm leading-relaxed discription text-gray-600 mt-6 max-w-3xl mx-auto">
            We’re not just creating parts; we’re building trust, shaping
            progress, and engineering a better tomorrow.
          </p>
        </div>
      </section>
    </div>
    </div>
  )
}

export default About