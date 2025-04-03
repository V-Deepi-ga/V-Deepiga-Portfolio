import React from 'react';

const Home: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center p-6 lg:p-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-lg font-medium text-[#2B2B2B] mb-3">HELLO, I'M</h3>
            <h1 className="text-4xl lg:text-6xl font-bold text-[#2B2B2B] leading-tight mb-4">John Wilson</h1>
            <h2 className="text-2xl lg:text-3xl font-semibold text-primary mb-6">Front-end Developer</h2>
            <p className="text-[#767676] mb-8 max-w-lg">
              I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.
            </p>
            
            <a 
              href="#contact" 
              className="inline-block py-3 px-6 bg-primary text-white rounded-md font-medium transition-all duration-300 btn-hover-effect"
              onClick={(e) => {
                e.preventDefault();
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  window.scrollTo({
                    top: contactSection.offsetTop,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              <i className="fas fa-download mr-2"></i> DOWNLOAD CV
            </a>
          </div>
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full bg-primary opacity-20 animate-pulse"></div>
              <img 
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400" 
                alt="John Wilson" 
                className="absolute inset-0 rounded-full object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
