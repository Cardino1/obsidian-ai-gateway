
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    number: "01",
    title: "Data Strategy & Governance",
    slogan: "Building the foundations of your data performance.",
    description: "We help you set the course and establish the rules for your data. From implementing organizational structures to creating your strategic roadmap, we ensure your data governance actively supports your business objectives. We design the Big Data architectures, for both cloud and on-premise environments, that will serve as the bedrock of your growth.",
    deliverables: [
      "Data Governance Charter",
      "Strategic Roadmap and Implementation Plan",
      "Big Data Architecture Design for Cloud and On-Premise",
      "Establishment of Data Management and Quality Processes"
    ]
  },
  {
    number: "02",
    title: "Data Engineering & Operations",
    slogan: "Transforming your raw data into a reliable, optimized asset.",
    description: "This service covers the entire technical lifecycle of your data. We develop robust collection pipelines using custom APIs, ensure data quality and lineage, and transform your raw data into analysis-ready information. By integrating DataOps and DevOps practices, we optimize your algorithms, storage, and cloud costs for maximum efficiency.",
    deliverables: [
      "Automated and scalable data pipelines, including ETL and ELT processes",
      "Custom API development for source management",
      "Optimized storage platforms like data lakes and data warehouses",
      "DataOps/DevOps service centers for continuous improvement"
    ]
  },
  {
    number: "03",
    title: "Business Intelligence & Analytics",
    slogan: "Uncovering hidden insights in your data for informed decisions.",
    description: "We make your data understandable and actionable. Our service covers the entire BI value chain, from helping define your key performance indicators (KPIs) to implementing interactive visualization tools like Tableau, Power BI, and Qlik. Our experts and analysts help you manage your projects and turn numbers into strategic decisions.",
    deliverables: [
      "Dynamic dashboards and custom reports",
      "Strategic KPI definition and tracking",
      "End-to-end BI project management",
      "Data analysis and expertise on market-leading BI tools"
    ]
  },
  {
    number: "04",
    title: "AI Systems & Architecture",
    slogan: "Activating predictive intelligence to automate and innovate.",
    description: "Go beyond descriptive analysis with our Artificial Intelligence solutions. We design and deploy custom AI and Machine Learning systems capable of forecasting trends, automating complex processes, and creating new opportunities. We build robust MLOps architectures to ensure your models are high-performing, scalable, and seamlessly integrated into your operations.",
    deliverables: [
      "Architecture design for AI and Machine Learning systems",
      "Machine Learning model development and deployment",
      "MLOps platform implementation for industrialization",
      "Proof of Concept (PoC) development and integration of AI solutions into business processes"
    ]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">Our Services</h2>
          <p className="text-white/70 text-lg">
            Comprehensive data and AI solutions designed to transform your business operations and drive innovation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4 mb-2">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-white/20 to-white/10 border border-white/20 flex items-center justify-center group-hover:from-white/30 group-hover:to-white/20 transition-all">
                    <span className="text-sm font-bold text-white">{service.number}</span>
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl font-bold text-white mb-2">{service.title}</CardTitle>
                    <p className="text-sm text-blue-300 font-medium italic">{service.slogan}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white/70 mb-6 leading-relaxed">
                  {service.description}
                </CardDescription>
                
                <div>
                  <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Key Deliverables:</h4>
                  <ul className="space-y-2">
                    {service.deliverables.map((deliverable, idx) => (
                      <li key={idx} className="text-white/60 text-sm flex items-start gap-2">
                        <span className="text-blue-400 mt-1.5 w-1 h-1 rounded-full bg-current flex-shrink-0"></span>
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
