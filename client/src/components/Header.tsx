import React from 'react';

interface HeaderProps {
  toggleMobileMenu: () => void;
  isMobileMenuOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleMobileMenu, isMobileMenuOpen }) => {
  return (
    <div 
      className={`menu-toggle fixed top-4 right-4 bg-white p-3 rounded-full shadow-md lg:hidden z-50 cursor-pointer ${isMobileMenuOpen ? 'active' : ''}`}
      onClick={toggleMobileMenu}
    >
      <div className="w-6 h-0.5 bg-[#111111] mb-1.5"></div>
      <div className="w-6 h-0.5 bg-[#111111] mb-1.5"></div>
      <div className="w-6 h-0.5 bg-[#111111]"></div>
    </div>
  );
};

export default Header;
