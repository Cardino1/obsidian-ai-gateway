
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Microscope, Activity, Database, Shield, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BioTech = () => {
  const solutions = [
    {
      title: "AI-Powered Drug Discovery",
      description: "Accelerate pharmaceutical research with advanced machine learning algorithms that identify promising compounds and predict molecular behavior.",
      icon: Microscope,
    },
    {
      title: "Clinical Trial Optimization",
      description: "Streamline clinical trials with AI-driven patient matching, protocol optimization, and real-time data analysis.",
      icon: Activity,
    },
    {
      title: "Biomarker Identification",
      description: "Discover novel biomarkers using deep learning techniques to analyze complex genomic and proteomic data.",
      icon: Database,
    },
    {
      title: "Regulatory Compliance AI",
      description: "Ensure regulatory compliance with AI systems designed to navigate complex healthcare regulations and documentation.",
      icon: Shield,
    },
  ];

  const capabilities = [
    "Genomic Data Analysis",
    "Protein Structure Prediction",
    "Clinical Decision Support",
    "Medical Image Analysis",
    "Electronic Health Records Processing",
    "Pharmacovigilance Automation",
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Brain className="h-16 w-16 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            AI Solutions for BioTech
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
            Transform biotechnology research and development with cutting-edge AI architecture solutions designed specifically for the life sciences industry.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-white text-black hover:bg-white/90">
              Start Your Project
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
              View Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Specialized BioTech AI Solutions
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Our AI architecture solutions are tailored to address the unique challenges 
              and opportunities in biotechnology and pharmaceutical research.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="bg-accent border-white/10 hover:border-white/20 transition-all duration-300">
                <CardHeader>
                  <div className="h-12 w-12 rounded-md bg-white/5 flex items-center justify-center mb-4">
                    <solution.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/70 mb-4">{solution.description}</p>
                  <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
                Advanced BioTech Capabilities
              </h2>
              <p className="text-white/70 mb-8">
                Our comprehensive suite of AI capabilities spans the entire biotechnology 
                value chain, from early-stage research to clinical deployment.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Zap className="h-5 w-5 text-white flex-shrink-0" />
                    <span className="text-white/80">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/5 p-8 rounded-lg border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">Why Choose Analytics One?</h3>
                <ul className="space-y-3 text-white/70">
                  <li>• HIPAA-compliant AI infrastructure</li>
                  <li>• FDA regulatory expertise</li>
                  <li>• Scalable cloud-native architecture</li>
                  <li>• Real-time data processing capabilities</li>
                  <li>• Integration with existing lab systems</li>
                  <li>• 24/7 monitoring and support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
            Ready to Transform Your BioTech Research?
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Let's discuss how our AI architecture solutions can accelerate your 
            biotechnology initiatives and drive breakthrough discoveries.
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-white/90">
            Schedule a Consultation
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BioTech;
