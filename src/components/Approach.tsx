
import { Separator } from "@/components/ui/separator";

const steps = [
  {
    number: "01",
    title: "Discovery & Analysis",
    description: "We dive deep into your business to understand your unique challenges, opportunities, and objectives for AI implementation."
  },
  {
    number: "02",
    title: "Architecture Blueprint",
    description: "Our experts design a comprehensive AI architecture blueprint tailored to your specific needs and technology stack."
  },
  {
    number: "03",
    title: "Prototype & Validation",
    description: "We build and test a prototype of your AI architecture to validate performance, scalability, and security requirements."
  },
  {
    number: "04",
    title: "Implementation & Integration",
    description: "Our team implements the full architecture and integrates it with your existing systems with minimal disruption."
  },
  {
    number: "05",
    title: "Monitoring & Optimization",
    description: "We provide ongoing monitoring, maintenance, and optimization to ensure your AI architecture continues to perform at its best."
  }
];

const Approach = () => {
  return (
    <section id="approach" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">Our Approach</h2>
          <p className="text-white/70">
            We follow a systematic, collaborative approach to designing and implementing
            AI architectures that deliver tangible business value.
          </p>
        </div>
        
        <div className="space-y-12 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row items-start gap-6 group">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-all">
                <span className="text-lg font-bold text-white/90">{step.number}</span>
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-white/70 mb-6">{step.description}</p>
                <Separator className="bg-white/10" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
