import React, { useState } from 'react';

interface Project {
  id: number;
  image: string;
  title: string;
  category: string;
  categoryDisplay: string;
}

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects: Project[] = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400',
      title: 'E-commerce Website',
      category: 'web',
      categoryDisplay: 'Web Design'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1616469829941-c7200edec809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400',
      title: 'Fitness Tracker App',
      category: 'app',
      categoryDisplay: 'Mobile App'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1643116774075-acc00caa9a7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400',
      title: 'Dashboard UI Kit',
      category: 'ui',
      categoryDisplay: 'UI/UX Design'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400',
      title: 'Portfolio Website',
      category: 'web',
      categoryDisplay: 'Web Design'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1551739440-5dd934d3a94a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400',
      title: 'Weather App',
      category: 'app',
      categoryDisplay: 'Mobile App'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400',
      title: 'Finance App UI',
      category: 'ui',
      categoryDisplay: 'UI/UX Design'
    }
  ];

  const filters = [
    { value: 'all', label: 'All' },
    { value: 'web', label: 'Web Design' },
    { value: 'app', label: 'Apps' },
    { value: 'ui', label: 'UI/UX' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-16 px-6 lg:px-12 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#2B2B2B] mb-2">My <span className="text-primary">Portfolio</span></h2>
          <p className="text-[#767676]">Recent Works</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {filters.map((filter, index) => (
            <button 
              key={index}
              className={`py-2 px-4 rounded-md text-[#2B2B2B] hover:bg-primary hover:text-white transition-colors ${activeFilter === filter.value ? 'bg-primary text-white' : 'bg-[#F0F0F6]'}`}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="project-card bg-[#F0F0F6] rounded-lg overflow-hidden shadow-md"
              data-category={project.category}
              style={{ display: activeFilter === 'all' || activeFilter === project.category ? 'block' : 'none' }}
            >
              <div className="relative overflow-hidden group">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-primary bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary mx-2">
                    <i className="fas fa-link"></i>
                  </a>
                  <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary mx-2">
                    <i className="fas fa-search"></i>
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#2B2B2B] mb-2">{project.title}</h3>
                <p className="text-[#767676] mb-3">{project.categoryDisplay}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
