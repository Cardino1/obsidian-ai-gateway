
import { Button } from "@/components/ui/button";
import { CircuitBoard } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Abstract background pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-[10%] left-[10%] w-[30vw] h-[30vw] border border-white/20 rounded-full"></div>
        <div className="absolute top-[20%] right-[15%] w-[15vw] h-[15vw] border border-white/20 rounded-full"></div>
        <div className="absolute bottom-[20%] left-[15%] w-[20vw] h-[20vw] border border-white/10 rounded-full"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 pt-32 pb-24 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
            <CircuitBoard className="h-4 w-4 mr-2 text-white/80" />
            <span className="text-sm text-white/80">Enterprise AI Architecture Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter gradient-text glow mb-6">
            Architect the Future <br className="hidden md:block" />of Enterprise AI
          </h1>
          
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-8">
            We design and build scalable, secure, and efficient AI architectures 
            that transform businesses and drive innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
            <Button className="flex-1 h-12 bg-white text-black hover:bg-white/90">
              Schedule a Consultation
            </Button>
            <Button variant="outline" className="flex-1 h-12 border-white/20 text-white hover:bg-white/10">
              Explore Solutions
            </Button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
