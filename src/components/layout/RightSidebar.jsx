import { Github, Linkedin, Mail, MessageCircle, Phone } from 'lucide-react';
import profile from '@/data/profile';
import StarBorder from '@react-bits/Animations/StarBorder/StarBorder';

const ContactItem = ({ icon, text, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-[#3A3B3C] transition-colors">
    <div className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-200 dark:bg-[#3A3B3C]">{icon}</div>
    <span className="text-gray-800 dark:text-gray-200 text-sm font-medium">{text}</span>
  </a>
);

const RightSidebar = () => {
  const contacts = [
    {
      icon: <Github className="w-5 h-5 text-text-primary" />,
      text: 'GitHub',
      link: profile.github,
    },
    {
      icon: <Linkedin className="w-5 h-5 text-text-primary" />,
      text: 'LinkedIn',
      link: profile.linkedin,
    },
    {
      icon: <Mail className="w-5 h-5 text-text-primary" />,
      text: 'Email',
      link: `mailto:${profile.email}`,
    },
    {
      icon: <Phone className="w-5 h-5 text-text-primary" />,
      text: profile.phone,
      link: `tel:${profile.phone}`,
    },
    {
      icon: <MessageCircle className="w-5 h-5 text-text-primary" />,
      text: 'Message Me',
      link: '/messages',
    },
  ];

  return (
    <aside className="hidden lg:block w-[280px] pl-4 py-4 sticky top-16 h-[calc(100vh-64px)] overflow-y-auto">
      <StarBorder as="div" className="rounded-lg w-full" color="magenta" thickness={1} speed="2s">
        <h3 className="text-gray-500 dark:text-gray-400 font-medium text-sm mb-3 px-2">CONTACT INFORMATION</h3>
        <div className="space-y-1">
          {contacts.map((contact, index) => (
            <ContactItem key={index} icon={contact.icon} text={contact.text} link={contact.link} />
          ))}
        </div>
      </StarBorder>

      <StarBorder as="div" className="rounded-lg w-full" color="magenta" thickness={1} speed="2s">
        <h3 className="text-gray-500 dark:text-gray-400 font-medium text-sm mb-3 px-2">TECHNOLOGIES</h3>
        <div className="flex flex-wrap gap-2 px-2">
          {['React', 'Tailwind', 'JavaScript', 'Node.js', 'Express', 'MongoDB'].map((tech, index) => (
            <span key={index} className="bg-gray-100 dark:bg-[#3A3B3C] text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </StarBorder>
    </aside>
  );
};

export default RightSidebar;
