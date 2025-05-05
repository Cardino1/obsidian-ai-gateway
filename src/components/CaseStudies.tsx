
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const caseStudies = [
  {
    client: "Global Financial Services",
    title: "AI-Powered Fraud Detection Architecture",
    description: "Designed and implemented a scalable AI architecture that processes millions of transactions in real-time, reducing fraud by 87% and saving $42M annually.",
    tags: ["Financial Services", "Fraud Detection", "Real-time Processing"]
  },
  {
    client: "Healthcare Network",
    title: "Medical Imaging AI Infrastructure",
    description: "Created a secure, compliant AI infrastructure for processing sensitive medical imaging data, improving diagnostic accuracy by 34% and reducing analysis time by 76%.",
    tags: ["Healthcare", "Medical Imaging", "HIPAA Compliant"]
  },
  {
    client: "Manufacturing Conglomerate",
    title: "Predictive Maintenance AI System",
    description: "Developed an edge-to-cloud AI architecture for predictive maintenance across 17 global facilities, reducing downtime by 43% and maintenance costs by $8.6M.",
    tags: ["Manufacturing", "Edge Computing", "Predictive Analytics"]
  }
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-24 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Case Studies</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Real-world examples of how our AI architecture solutions have transformed businesses and delivered exceptional results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="bg-black border-white/10 hover:border-white/30 transition-all duration-300">
              <CardHeader>
                <div className="text-sm text-white/50 mb-2">{study.client}</div>
                <h3 className="text-xl font-bold text-white">{study.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-white/70 mb-4">{study.description}</p>
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="bg-white/5 text-white/80 border-white/20">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <a href="#" className="text-sm text-white underline underline-offset-4 hover:text-white/80">
                  Read full case study →
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
