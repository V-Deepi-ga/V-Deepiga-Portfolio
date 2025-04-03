import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      icon: 'fa-code',
      title: 'Web Development',
      description: 'Creating modern, responsive websites using the latest technologies like React, Vue.js, and Node.js.'
    },
    {
      icon: 'fa-palette',
      title: 'UI/UX Design',
      description: 'Designing beautiful user interfaces and experiences that are both functional and visually appealing.'
    },
    {
      icon: 'fa-mobile-alt',
      title: 'Responsive Design',
      description: 'Ensuring websites work perfectly across all devices, from desktops to mobile phones.'
    },
    {
      icon: 'fa-cogs',
      title: 'Web Optimization',
      description: 'Improving website performance and speed to enhance user experience and SEO rankings.'
    },
    {
      icon: 'fa-search',
      title: 'SEO Optimization',
      description: 'Optimizing websites for search engines to improve visibility and drive organic traffic.'
    },
    {
      icon: 'fa-shield-alt',
      title: 'Web Security',
      description: 'Implementing security measures to protect websites from common vulnerabilities and attacks.'
    }
  ];

  return (
    <section id="services" className="py-16 px-6 lg:px-12">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#2B2B2B] mb-2">My <span className="text-primary">Services</span></h2>
          <p className="text-[#767676]">What I Offer</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 bg-[#F0F0F6] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className={`fas ${service.icon} text-2xl text-primary`}></i>
              </div>
              <h3 className="text-xl font-semibold text-[#2B2B2B] mb-3">{service.title}</h3>
              <p className="text-[#767676]">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
