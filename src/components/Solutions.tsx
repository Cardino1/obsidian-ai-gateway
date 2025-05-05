
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Database, Server, Globe } from "lucide-react";

const solutions = [
  {
    title: "Enterprise AI Infrastructure",
    description: "Build robust, scalable infrastructure for AI workloads across your organization.",
    icon: Server,
  },
  {
    title: "AI Integration Framework",
    description: "Seamlessly connect AI capabilities with your existing business systems and workflows.",
    icon: Database,
  },
  {
    title: "Neural Architecture Design",
    description: "Custom neural network architectures optimized for your specific business challenges.",
    icon: Brain,
  },
  {
    title: "Global AI Deployment",
    description: "Deploy and manage AI systems across global infrastructure with consistent performance.",
    icon: Globe,
  },
];

const Solutions = () => {
  return (
    <section id="solutions" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Enterprise AI Solutions</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Our comprehensive suite of AI architecture solutions designed to solve 
            complex business challenges and drive innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <Card key={index} className="bg-accent border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="h-12 w-12 rounded-md bg-white/5 flex items-center justify-center mb-4">
                  <solution.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">{solution.title}</CardTitle>
                <CardDescription className="text-white/70">{solution.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <a href="#" className="text-sm text-white underline underline-offset-4 hover:text-white/80">
                  Learn more →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
