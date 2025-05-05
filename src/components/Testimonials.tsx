
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "NexusAI's architecture team designed an AI solution that transformed our business operations. The ROI has been exceptional.",
    author: "Sarah Chen",
    title: "CTO, Global Financial Corp",
    initials: "SC"
  },
  {
    quote: "Their methodical approach to AI architecture saved us months of development time and millions in potential missteps.",
    author: "Michael Adebayo",
    title: "VP of Innovation, TechSolutions Inc",
    initials: "MA"
  },
  {
    quote: "The scalability of the AI architecture NexusAI designed has allowed us to expand to new markets with confidence.",
    author: "Jessica Martinez",
    title: "Director of Data Science, RetailGiant",
    initials: "JM"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-[30%] right-[20%] w-[25vw] h-[25vw] border border-white/10 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">What Our Clients Say</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Hear from the industry leaders who have transformed their businesses with our AI architecture solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-accent border border-white/10 rounded-lg p-6 relative">
              <div className="absolute -top-4 -left-4 text-4xl text-white/20">"</div>
              <blockquote className="text-white/90 mb-6">
                {testimonial.quote}
              </blockquote>
              <div className="flex items-center">
                <Avatar className="h-10 w-10 mr-3 border border-white/20">
                  <AvatarFallback className="bg-white/10 text-white">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium text-white">{testimonial.author}</div>
                  <div className="text-sm text-white/60">{testimonial.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
