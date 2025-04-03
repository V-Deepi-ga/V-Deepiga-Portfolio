import { useState, useEffect } from "react";
import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Portfolio from "@/pages/Portfolio";
import Testimonials from "@/pages/Testimonials";
import Contact from "@/pages/Contact";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import NotFound from "@/pages/not-found";

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu when clicking on a link
  useEffect(() => {
    const handleHashChange = () => {
      closeMobileMenu();
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className="app">
      <Header toggleMobileMenu={toggleMobileMenu} isMobileMenuOpen={isMobileMenuOpen} />
      <Sidebar isMobileMenuOpen={isMobileMenuOpen} closeMobileMenu={closeMobileMenu} />
      
      <main className="lg:ml-80">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/#about" component={About} />
          <Route path="/#services" component={Services} />
          <Route path="/#portfolio" component={Portfolio} />
          <Route path="/#testimonials" component={Testimonials} />
          <Route path="/#contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
        
        <Home />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        
        {/* Footer */}
        <footer className="py-8 px-6 bg-white border-t border-gray-200">
          <div className="container mx-auto text-center">
            <p className="text-[#767676]">© 2023 John Wilson. All rights reserved.</p>
          </div>
        </footer>
      </main>
      
      <Toaster />
    </div>
  );
}

export default App;
