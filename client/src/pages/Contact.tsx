import React, { useState } from 'react';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const contactInfo = [
    {
      icon: 'fa-map-marker-alt',
      title: 'Address',
      details: '123 Main Street, San Francisco, CA 94111'
    },
    {
      icon: 'fa-envelope',
      title: 'Email',
      details: 'john@example.com'
    },
    {
      icon: 'fa-phone-alt',
      title: 'Phone',
      details: '+1 123 456 7890'
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setIsSubmitting(true);
      
      // Send form data to backend
      await apiRequest('POST', '/api/contact', formData);
      
      toast({
        title: "Message sent",
        description: "Your message has been sent successfully!",
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 px-6 lg:px-12 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#2B2B2B] mb-2">Contact <span className="text-primary">Me</span></h2>
          <p className="text-[#767676]">Get in Touch</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-[#2B2B2B] mb-6">Get In Touch</h3>
            <p className="text-[#767676] mb-8">
              Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-12 h-12 bg-[#F0F0F6] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className={`fas ${info.icon} text-primary`}></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-[#2B2B2B] mb-1">{info.title}</h4>
                    <p className="text-[#767676]">{info.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#F0F0F6] border-none rounded-md focus:ring-2 focus:ring-primary outline-none"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#F0F0F6] border-none rounded-md focus:ring-2 focus:ring-primary outline-none"
                  />
                </div>
              </div>
              
              <div>
                <input 
                  type="text" 
                  name="subject"
                  placeholder="Subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#F0F0F6] border-none rounded-md focus:ring-2 focus:ring-primary outline-none"
                />
              </div>
              
              <div>
                <textarea 
                  rows={5} 
                  name="message"
                  placeholder="Message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#F0F0F6] border-none rounded-md focus:ring-2 focus:ring-primary outline-none"
                ></textarea>
              </div>
              
              <div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="py-3 px-8 bg-primary text-white rounded-md font-medium transition-all duration-300 btn-hover-effect disabled:opacity-70"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
