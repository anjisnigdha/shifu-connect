import { MOCK_TESTIMONIALS } from '@/lib/data';

export default function DocumentaryPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                The Documentary: <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Journey of Innovation</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                A powerful story of AI entrepreneurs from the remotest parts of India overcoming challenges and building the future.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="px-8 py-3 text-lg font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition duration-300">
                  Watch Trailer
                </button>
                <button className="px-8 py-3 text-lg font-medium text-white border-2 border-indigo-400 rounded-md hover:bg-indigo-800 transition duration-300">
                  Behind the Scenes
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-video bg-indigo-800 rounded-lg shadow-2xl overflow-hidden">
                {/* Placeholder for video player */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-indigo-50 transition">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Behind the Scenes Carousel */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Behind the Scenes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the journey of creating this documentary from conceptualization to final production
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="aspect-video bg-indigo-100"></div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {["Conceptualization & Planning", "On Location: Rural India", "Post-Production Magic"][item-1]}
                  </h3>
                  <p className="text-gray-600">
                    {["The journey began with extensive research on AI entrepreneurs from rural India.", 
                      "Our crew traveled to remote villages to capture authentic stories.", 
                      "Editing, sound design, and visual effects bringing stories to life."][item-1]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Founder Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Founder Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the inspiring entrepreneurs featured in our documentary
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {["Rakesh Sharma", "Priya Desai", "Arjun Mehta", "Meera Reddy"].map((founder, index) => (
              <div key={founder} className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-full md:w-32 h-32 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-lg flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{founder}</h3>
                  <p className="text-sm text-indigo-600 mb-3">
                    {["AI-Powered Agriculture", "Healthcare Tech", "Language Processing", "Artisan Marketplace"][index]}
                  </p>
                  <p className="text-gray-600">
                    {["Revolutionizing farming in rural Punjab with AI-powered irrigation systems.",
                      "Created intuitive AI interfaces for healthcare workers in remote villages.",
                      "Developed AI translators helping rural students access educational content.",
                      "Founded an AI marketplace connecting rural artisans to global buyers."][index]}
                  </p>
                  <button className="mt-4 inline-flex items-center text-indigo-600 font-medium">
                    <span>Read full story</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Early Testimonials</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What people are saying about the documentary
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MOCK_TESTIMONIALS.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full"></div>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-4">{testimonial.quote}</p>
                    <div className="flex items-center">
                      <div>
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.organization}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Press Coverage */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Press Highlights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Featured in leading publications
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {["The Economic Times", "YourStory", "Inc42", "TechCrunch"].map((press) => (
              <div key={press} className="flex flex-col items-center">
                <div className="h-12 mb-4 bg-gray-200 w-full max-w-[180px] rounded"></div>
                <p className="text-gray-600 text-sm text-center">{press}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience the Documentary?</h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join us at a screening event near you or host your own screening
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 text-lg font-medium text-indigo-600 bg-white rounded-md hover:bg-indigo-50 transition duration-300">
              Find a Screening
            </button>
            <button className="px-8 py-3 text-lg font-medium text-white border-2 border-white rounded-md hover:bg-indigo-500 transition duration-300">
              Host a Screening
            </button>
          </div>
        </div>
      </section>
    </main>
  );
} 