import React from 'react';
import { Link } from 'wouter';

interface SidebarProps {
  isMobileMenuOpen: boolean;
  closeMobileMenu: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isMobileMenuOpen, closeMobileMenu }) => {
  const navItems = [
    { href: "#home", icon: "fa-home", label: "Home" },
    { href: "#about", icon: "fa-user", label: "About" },
    { href: "#services", icon: "fa-briefcase", label: "Services" },
    { href: "#portfolio", icon: "fa-layer-group", label: "Portfolio" },
    { href: "#testimonials", icon: "fa-star", label: "Testimonials" },
    { href: "#contact", icon: "fa-envelope", label: "Contact" }
  ];

  const socialItems = [
    { href: "#", icon: "fa-facebook-f" },
    { href: "#", icon: "fa-twitter" },
    { href: "#", icon: "fa-instagram" },
    { href: "#", icon: "fa-linkedin-in" }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href') || '';
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
      closeMobileMenu();
    }
  };

  return (
    <>
      {/* Mobile Menu */}
      <div className={`mobile-menu fixed top-0 left-0 w-64 h-full bg-white shadow-lg p-6 lg:hidden ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="flex justify-center mb-8">
          <img 
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150" 
            alt="John Wilson" 
            className="w-24 h-24 rounded-full border-4 border-primary"
          />
        </div>
        <nav>
          <ul className="space-y-4">
            {navItems.map((item, index) => (
              <li key={index}>
                <a 
                  href={item.href} 
                  className="block py-2 px-4 text-[#2B2B2B] hover:text-primary transition-colors"
                  onClick={handleNavClick}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <div className="flex space-x-3">
            {socialItems.map((item, index) => (
              <a 
                key={index}
                href={item.href} 
                className="w-8 h-8 bg-[#F0F0F6] rounded-full flex items-center justify-center text-[#2B2B2B] hover:bg-primary hover:text-white transition-colors"
              >
                <i className={`fab ${item.icon}`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
      
      {/* Desktop Sidebar */}
      <aside className="sidebar hidden lg:block fixed top-0 left-0 h-full w-80 bg-white p-8 shadow-md z-10">
        <div className="flex flex-col items-center">
          <img 
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200" 
            alt="John Wilson" 
            className="w-36 h-36 rounded-full border-4 border-primary mb-4"
          />
          <h2 className="text-xl font-bold text-[#2B2B2B]">John Wilson</h2>
          <p className="text-primary font-medium mb-8">Front-end Developer</p>
          
          <nav className="w-full">
            <ul className="space-y-3">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href} 
                    className="block py-2.5 px-4 rounded-md hover:bg-primary hover:text-white text-[#2B2B2B] transition-colors"
                    onClick={handleNavClick}
                  >
                    <i className={`fas ${item.icon} mr-3`}></i> {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        
        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <div className="flex space-x-3">
            {socialItems.map((item, index) => (
              <a 
                key={index}
                href={item.href} 
                className="w-8 h-8 bg-[#F0F0F6] rounded-full flex items-center justify-center text-[#2B2B2B] hover:bg-primary hover:text-white transition-colors"
              >
                <i className={`fab ${item.icon}`}></i>
              </a>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
