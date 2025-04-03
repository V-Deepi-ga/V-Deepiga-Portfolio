import React, { useState, useEffect } from 'react';

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState('personal');

  const tabs = [
    { id: 'personal', label: 'Personal Info' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' }
  ];

  const skills = [
    { name: 'HTML', percentage: 95 },
    { name: 'CSS', percentage: 85 },
    { name: 'JavaScript', percentage: 90 },
    { name: 'React', percentage: 80 },
    { name: 'Vue.js', percentage: 70 },
    { name: 'Node.js', percentage: 75 },
  ];

  useEffect(() => {
    if (activeTab === 'skills') {
      animateProgressBars();
    }
  }, [activeTab]);

  const animateProgressBars = () => {
    const progressBars = document.querySelectorAll('.progress-fill');
    progressBars.forEach(bar => {
      const elem = bar as HTMLElement;
      const width = elem.getAttribute('data-width') || '0';
      elem.style.width = '0';
      setTimeout(() => {
        elem.style.width = `${width}%`;
      }, 300);
    });
  };

  return (
    <section id="about" className="py-16 px-6 lg:px-12 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#2B2B2B] mb-2">About <span className="text-primary">Me</span></h2>
          <p className="text-[#767676]">My Introduction</p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3">
            <img 
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=700" 
              alt="John Wilson" 
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          
          <div className="lg:w-2/3">
            <div className="mb-10">
              <ul className="flex flex-wrap gap-2 mb-6">
                {tabs.map((tab) => (
                  <li 
                    key={tab.id}
                    className={`tab-btn bg-[#F0F0F6] py-2 px-4 rounded-md cursor-pointer text-[#2B2B2B] hover:bg-primary hover:text-white transition-colors ${activeTab === tab.id ? 'bg-primary text-white' : ''}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </li>
                ))}
              </ul>
              
              {/* Tab Content */}
              <div className={`tab-content ${activeTab === 'personal' ? 'active' : ''}`}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div>
                    <p className="text-[#767676] mb-1">First Name: <span className="text-[#2B2B2B] font-medium">John</span></p>
                    <p className="text-[#767676] mb-1">Age: <span className="text-[#2B2B2B] font-medium">28</span></p>
                    <p className="text-[#767676] mb-1">Freelance: <span className="text-primary font-medium">Available</span></p>
                    <p className="text-[#767676] mb-1">Phone: <span className="text-[#2B2B2B] font-medium">+1 123 456 7890</span></p>
                  </div>
                  <div>
                    <p className="text-[#767676] mb-1">Last Name: <span className="text-[#2B2B2B] font-medium">Wilson</span></p>
                    <p className="text-[#767676] mb-1">Nationality: <span className="text-[#2B2B2B] font-medium">USA</span></p>
                    <p className="text-[#767676] mb-1">Languages: <span className="text-[#2B2B2B] font-medium">English, Spanish</span></p>
                    <p className="text-[#767676] mb-1">Email: <span className="text-[#2B2B2B] font-medium">john@example.com</span></p>
                  </div>
                </div>
                
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
                  DOWNLOAD CV
                </a>
              </div>
              
              <div className={`tab-content ${activeTab === 'skills' ? 'active' : ''}`}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    {skills.slice(0, 3).map((skill, index) => (
                      <div className="mb-4" key={index}>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium text-[#2B2B2B]">{skill.name}</span>
                          <span className="text-primary font-medium">{skill.percentage}%</span>
                        </div>
                        <div className="progress-bar">
                          <div 
                            className="progress-fill" 
                            data-width={skill.percentage}
                            style={{ width: `${skill.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div>
                    {skills.slice(3).map((skill, index) => (
                      <div className="mb-4" key={index}>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium text-[#2B2B2B]">{skill.name}</span>
                          <span className="text-primary font-medium">{skill.percentage}%</span>
                        </div>
                        <div className="progress-bar">
                          <div 
                            className="progress-fill" 
                            data-width={skill.percentage}
                            style={{ width: `${skill.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className={`tab-content ${activeTab === 'education' ? 'active' : ''}`}>
                <div className="space-y-6 mb-8">
                  <div className="bg-[#F0F0F6] p-6 rounded-lg">
                    <span className="text-primary font-medium text-sm">2015 - 2019</span>
                    <h4 className="text-xl font-semibold text-[#2B2B2B] mb-1">Bachelor Degree in Computer Science</h4>
                    <p className="text-[#767676] mb-2">University of California</p>
                    <p className="text-[#767676]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi.</p>
                  </div>
                  
                  <div className="bg-[#F0F0F6] p-6 rounded-lg">
                    <span className="text-primary font-medium text-sm">2013 - 2015</span>
                    <h4 className="text-xl font-semibold text-[#2B2B2B] mb-1">Associate Degree in Web Development</h4>
                    <p className="text-[#767676] mb-2">San Francisco State College</p>
                    <p className="text-[#767676]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi.</p>
                  </div>
                </div>
              </div>
              
              <div className={`tab-content ${activeTab === 'experience' ? 'active' : ''}`}>
                <div className="space-y-6 mb-8">
                  <div className="bg-[#F0F0F6] p-6 rounded-lg">
                    <span className="text-primary font-medium text-sm">2021 - Present</span>
                    <h4 className="text-xl font-semibold text-[#2B2B2B] mb-1">Senior Front-end Developer</h4>
                    <p className="text-[#767676] mb-2">Dribbble Inc.</p>
                    <p className="text-[#767676]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi.</p>
                  </div>
                  
                  <div className="bg-[#F0F0F6] p-6 rounded-lg">
                    <span className="text-primary font-medium text-sm">2019 - 2021</span>
                    <h4 className="text-xl font-semibold text-[#2B2B2B] mb-1">Junior Front-end Developer</h4>
                    <p className="text-[#767676] mb-2">Creative Agency</p>
                    <p className="text-[#767676]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
