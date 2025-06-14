import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Code, Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-black/90 backdrop-blur-sm z-50 border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Code className="h-8 w-8 text-white mr-2" />
            <span className="text-xl font-bold tracking-tighter gradient-text">Analytics One</span>
          </div>
          
          <nav className="hidden md:flex space-x-10">
            <a href="#solutions" className="text-sm text-white/80 hover:text-white transition-colors">Solutions</a>
            <a href="#approach" className="text-sm text-white/80 hover:text-white transition-colors">Approach</a>
            <a href="#case-studies" className="text-sm text-white/80 hover:text-white transition-colors">Case Studies</a>
            <a href="#contact" className="text-sm text-white/80 hover:text-white transition-colors">Contact</a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="text-sm border-white/20 text-white/80 hover:text-white hover:bg-white/10">
              Login
            </Button>
            <Button className="text-sm bg-white text-black hover:bg-white/90">
              Get Started
            </Button>
          </div>
          
          <div className="md:hidden">
            <button
              type="button"
              className="text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#solutions" className="block py-2 px-3 text-white/80 hover:text-white">Solutions</a>
            <a href="#approach" className="block py-2 px-3 text-white/80 hover:text-white">Approach</a>
            <a href="#case-studies" className="block py-2 px-3 text-white/80 hover:text-white">Case Studies</a>
            <a href="#contact" className="block py-2 px-3 text-white/80 hover:text-white">Contact</a>
            <div className="flex flex-col space-y-2 pt-2">
              <Button variant="outline" className="text-sm border-white/20 text-white/80 hover:text-white hover:bg-white/10">
                Login
              </Button>
              <Button className="text-sm bg-white text-black hover:bg-white/90">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
