import { Github, Linkedin, Mail, MessageCircle, Phone } from 'lucide-react';

const ContactItem = ({ icon, text, link }) => (
  <a 
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-[#3A3B3C] transition-colors"
  >
    <div className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-200 dark:bg-[#3A3B3C]">
      {icon}
    </div>
    <span className="text-gray-800 dark:text-gray-200 text-sm font-medium">
      {text}
    </span>
  </a>
);

const RightSidebar = () => {
  const contacts = [
    { 
      icon: <Github className="w-5 h-5" />, 
      text: 'GitHub',
      link: 'https://github.com/username'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      text: 'LinkedIn',
      link: 'https://linkedin.com/in/username'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      text: 'Email',
      link: 'mailto:email@example.com'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      text: '+1 234 567 8900',
      link: 'tel:+12345678900'
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      text: 'Message Me',
      link: '/messages'
    }
  ];

  return (
    <aside className="hidden lg:block w-[280px] pl-4 py-4 sticky top-16 h-[calc(100vh-64px)] overflow-y-auto">
      <div className="bg-white dark:bg-[#242526] rounded-lg shadow p-4">
        <h3 className="text-gray-500 dark:text-gray-400 font-medium text-sm mb-3 px-2">
          CONTACT INFORMATION
        </h3>
        <div className="space-y-1">
          {contacts.map((contact, index) => (
            <ContactItem 
              key={index}
              icon={contact.icon}
              text={contact.text}
              link={contact.link}
            />
          ))}
        </div>
      </div>
      
      <div className="bg-white dark:bg-[#242526] rounded-lg shadow p-4 mt-4">
        <h3 className="text-gray-500 dark:text-gray-400 font-medium text-sm mb-3 px-2">
          TECHNOLOGIES
        </h3>
        <div className="flex flex-wrap gap-2 px-2">
          {['React', 'Tailwind', 'JavaScript', 'Node.js', 'Express', 'MongoDB'].map((tech, index) => (
            <span
              key={index}
              className="bg-gray-100 dark:bg-[#3A3B3C] text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar; 