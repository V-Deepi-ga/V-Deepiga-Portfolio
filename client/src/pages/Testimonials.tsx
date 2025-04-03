import React, { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  image: string;
  text: string;
  name: string;
  position: string;
}

const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials: Testimonial[] = [
    {
      id: 0,
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&h=80',
      text: '"John is an exceptional front-end developer who consistently delivers high-quality work. His attention to detail and ability to translate designs into functional websites is impressive. I highly recommend him for any web development project."',
      name: 'Jane Doe',
      position: 'CEO, Design Agency'
    },
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&h=80',
      text: '"Working with John was a pleasure. He understood our requirements perfectly and delivered a website that exceeded our expectations. His technical skills and creativity make him stand out from other developers."',
      name: 'Michael Smith',
      position: 'Founder, Tech Startup'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&h=80',
      text: '"John transformed our outdated website into a modern, responsive platform that has significantly improved our user engagement. His expertise in front-end development and problem-solving abilities are truly remarkable."',
      name: 'Sarah Johnson',
      position: 'Marketing Director, E-commerce Company'
    }
  ];

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-16 px-6 lg:px-12">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#2B2B2B] mb-2">Client <span className="text-primary">Testimonials</span></h2>
          <p className="text-[#767676]">What My Clients Say</p>
        </div>
        
        <div className="testimonial-slider relative">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`testimonial-slide ${index === currentSlide ? 'active' : ''}`}
            >
              <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto text-center">
                <div className="w-20 h-20 mx-auto mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <p className="text-[#767676] mb-6 italic">{testimonial.text}</p>
                <h4 className="text-xl font-semibold text-[#2B2B2B]">{testimonial.name}</h4>
                <p className="text-primary">{testimonial.position}</p>
              </div>
            </div>
          ))}
          
          {/* Testimonial Controls */}
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                className={`w-3 h-3 rounded-full mx-1 hover:bg-primary transition-colors ${index === currentSlide ? 'bg-primary' : 'bg-[#F0F0F6]'}`}
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
