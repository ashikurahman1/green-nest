import React from 'react';

export default function AboutUs() {
  return (
    <div className="bg-gradient-to-b from-green-50 via-white to-white py-20 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="w-full lg:w-10/12 mx-auto   space-y-16">
        {/* Header Section */}
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-green-800 mt-8">
            About Greennest
          </h1>
          <p className=" max-w-2xl mx-auto ">
            At Greennest, we believe every home deserves a touch of nature. Our
            mission is to make plant care simple, enjoyable, and accessible to
            everyone.
          </p>
        </header>

        {/* Story Section */}
        <section className="bg-white rounded-2xl shadow-md border border-green-100 p-8 lg:p-10">
          <h2 className="text-2xl font-semibold text-green-800">Our Story</h2>
          <p className="mt-3  leading-relaxed">
            Greennest started with a simple idea: helping people bring life into
            their living spaces. What began as a small collection of handpicked
            indoor plants has grown into a trusted platform loved by plant
            enthusiasts across the country. We focus on delivering healthy,
            nurtured plants and providing proper guidance so they thrive long
            after arriving at your doorstep.
          </p>
        </section>

        {/* Mission Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="bg-green-50 border border-green-100 rounded-2xl p-8 h-full">
            <h3 className="text-xl font-semibold text-green-800">
              Our Mission
            </h3>
            <p className="mt-2  leading-relaxed">
              To inspire greener lifestyles through quality plants, simple care
              tips, and sustainable products. We aim to guide beginners and
              support plant lovers at every step of their journey.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-md border border-green-100 bg-white p-8">
            <h3 className="text-xl font-semibold text-green-800">
              Why Choose Us?
            </h3>
            <ul className="mt-4 text-green-700  space-y-3">
              <li className="flex gap-2 items-start">
                <span className="w-2 h-2 mt-2 bg-green-600 rounded-full"></span>
                Healthy and carefully curated plants
              </li>
              <li className="flex gap-2 items-start">
                <span className="w-2 h-2 mt-2 bg-green-600 rounded-full"></span>
                Clear plant care guidance for beginners
              </li>
              <li className="flex gap-2 items-start">
                <span className="w-2 h-2 mt-2 bg-green-600 rounded-full"></span>
                Fast and safe delivery right to your door
              </li>
              <li className="flex gap-2 items-start">
                <span className="w-2 h-2 mt-2 bg-green-600 rounded-full"></span>
                Passionate support team available for help
              </li>
            </ul>
          </div>
        </section>

        {/* Vision Section */}
        <section className="bg-white rounded-2xl shadow-md border border-green-100 p-8 lg:p-10">
          <h2 className="text-2xl font-semibold text-green-800">Our Vision</h2>
          <p
            className="mt-3 
            leading-relaxed max-w-3xl"
          >
            We dream of a world where every space—homes, offices,
            communities—has a greener, fresher touch. Greennest is committed to
            promoting sustainable living by providing eco-friendly products,
            reducing waste, and encouraging everyone to build their own green
            sanctuary.
          </p>
        </section>

        {/* CTA Section */}
        <div className="text-center mt-10">
          <p className="text-green-700 ">
            Want to know more or need help choosing a plant?
          </p>
          <a
            href="/contact"
            className="inline-block mt-4 px-6 py-2 rounded-lg bg-green-600 text-white  font-medium shadow hover:bg-green-700"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
