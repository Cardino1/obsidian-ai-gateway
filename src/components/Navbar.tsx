
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Code, Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

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
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-sm text-white/80 hover:text-white transition-colors">
                Solutions
                <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-black/90 border-white/10 backdrop-blur-sm">
                <DropdownMenuItem className="text-white/80 hover:text-white focus:text-white">
                  Finance
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="text-white/80 hover:text-white focus:text-white">
                  <Link to="/neuramedica">NeuraMedica</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <a href="#services" className="text-sm text-white/80 hover:text-white transition-colors">Services</a>
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
            <div className="py-2 px-3">
              <span className="text-white/80 font-medium">Solutions</span>
              <div className="ml-4 mt-2 space-y-1">
                <div className="block py-1 px-3 text-white/60">Finance</div>
                <Link to="/neuramedica" className="block py-1 px-3 text-white/60 hover:text-white">
                  NeuraMedica
                </Link>
              </div>
            </div>
            <a href="#services" className="block py-2 px-3 text-white/80 hover:text-white">Services</a>
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
