import { FadeIn } from '@/components/Animation';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';
import ContactCard from './ContactCard';
import MessageForm from './MessageForm';
import profile from '@/data/profile';

const Messages = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-blue-500" />,
      title: 'Email',
      value: profile.email,
      link: `mailto:${profile.email}`,
      buttonText: 'Send Email',
    },
    {
      icon: <Phone className="w-6 h-6 text-blue-500" />,
      title: 'Phone',
      value: profile.phone,
      link: `tel:${profile.phone}`,
      buttonText: 'Call Me',
    },
    {
      icon: <Github className="w-6 h-6 text-blue-500" />,
      title: 'GitHub',
      value: profile.github,
      link: profile.github,
      buttonText: 'View Profile',
    },
    {
      icon: <Linkedin className="w-6 h-6 text-blue-500" />,
      title: 'LinkedIn',
      value: profile.linkedin,
      link: profile.linkedin,
      buttonText: 'Connect',
    },
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <FadeIn>
        <div className="text-center mb-8 lg:mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-2 sm:mb-3">
            Let's Connect
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a question or want to work together? Reach out!
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Contact Cards Section */}
        <div className="space-y-4 sm:space-y-5 lg:space-y-6">
          {contactInfo.map((contact, index) => (
            <ContactCard 
              key={index} 
              icon={contact.icon} 
              title={contact.title} 
              value={contact.value} 
              link={contact.link} 
              buttonText={contact.buttonText} 
              delay={100 + index * 100} 
            />
          ))}
        </div>
        
        {/* Message Form Section */}
        <div className="mt-6 lg:mt-0">
          <MessageForm />
        </div>
      </div>
    </div>
  );
};

export default Messages;
