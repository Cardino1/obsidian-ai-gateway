
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // This is where we would normally handle the form submission
    // Since we don't have backend functionality yet, we'll just show a toast
    
    toast({
      title: "Form submitted",
      description: "We'll get back to you soon!",
      duration: 5000,
    });
  };

  return (
    <section id="contact" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
                Ready to transform your business with AI?
              </h2>
              <p className="text-white/70 mb-8">
                Get in touch with our AI architecture experts to discuss your unique challenges 
                and discover how we can help you build powerful, scalable AI solutions.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-white/5 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">Email Us</h3>
                    <p className="text-white/70">contact@analyticsone.site</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-white/5 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">Call Us</h3>
                    <p className="text-white/70">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-white/5 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">Visit Us</h3>
                    <p className="text-white/70">12 Rue Clément, 75006 Paris, France</p>
                    <p className="text-white/70">360 E 2nd St, DTLA, CA 90012, USA</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-accent rounded-lg p-8 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6">Get in Touch</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm text-white/70 mb-1">Name</label>
                    <Input id="name" className="bg-black border-white/20 focus:border-white" required />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm text-white/70 mb-1">Company</label>
                    <Input id="company" className="bg-black border-white/20 focus:border-white" required />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm text-white/70 mb-1">Email</label>
                  <Input id="email" type="email" className="bg-black border-white/20 focus:border-white" required />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm text-white/70 mb-1">Message</label>
                  <Textarea id="message" className="bg-black border-white/20 focus:border-white min-h-[120px]" required />
                </div>
                
                <Button type="submit" className="w-full bg-white text-black hover:bg-white/90">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
