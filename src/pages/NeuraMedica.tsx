
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NeuraMedica = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              Accelerate Healthcare Innovation with AI
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              NeuraMedica harnesses the power of artificial intelligence to revolutionize 
              healthcare delivery, drug discovery, and patient outcomes through advanced 
              neural networks and machine learning algorithms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors">
                Get Started
              </button>
              <button className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-gray-900/30">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
              AI-Powered Healthcare Solutions
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/5 p-8 rounded-lg border border-white/10">
                <div className="w-12 h-12 bg-blue-500 rounded-lg mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Drug Discovery</h3>
                <p className="text-white/70">
                  Accelerate pharmaceutical research with AI-driven molecular analysis 
                  and predictive modeling for faster drug development cycles.
                </p>
              </div>
              
              <div className="bg-white/5 p-8 rounded-lg border border-white/10">
                <div className="w-12 h-12 bg-green-500 rounded-lg mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Patient Care</h3>
                <p className="text-white/70">
                  Enhance patient outcomes through personalized treatment recommendations 
                  and real-time health monitoring powered by machine learning.
                </p>
              </div>
              
              <div className="bg-white/5 p-8 rounded-lg border border-white/10">
                <div className="w-12 h-12 bg-purple-500 rounded-lg mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Clinical Analytics</h3>
                <p className="text-white/70">
                  Transform clinical data into actionable insights with advanced 
                  analytics and predictive modeling for better healthcare decisions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 gradient-text">
                  Advanced Neural Networks for Healthcare
                </h2>
                <p className="text-white/80 mb-6">
                  Our proprietary neural network architectures are specifically designed 
                  for healthcare applications, processing complex medical data with 
                  unprecedented accuracy and speed.
                </p>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Deep learning for medical imaging analysis
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Natural language processing for clinical notes
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Predictive modeling for patient outcomes
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Real-time decision support systems
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-8 rounded-lg border border-white/10">
                <div className="aspect-square bg-white/5 rounded-lg flex items-center justify-center">
                  <svg className="w-24 h-24 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 gradient-text">
              Ready to Transform Healthcare with AI?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Join leading healthcare organizations already using NeuraMedica to 
              improve patient outcomes and accelerate medical breakthroughs.
            </p>
            <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors">
              Contact Us Today
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NeuraMedica;
