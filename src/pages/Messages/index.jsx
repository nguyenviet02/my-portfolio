import { FadeIn } from '@/components/Animation';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';
import ContactCard from './ContactCard';
import MessageForm from './MessageForm';

const Messages = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-blue-500" />,
      title: 'Email',
      value: 'john.doe@example.com',
      link: 'mailto:john.doe@example.com',
      buttonText: 'Send Email',
    },
    {
      icon: <Phone className="w-6 h-6 text-blue-500" />,
      title: 'Phone',
      value: '+1 (234) 567-8900',
      link: 'tel:+12345678900',
      buttonText: 'Call Me',
    },
    {
      icon: <Github className="w-6 h-6 text-blue-500" />,
      title: 'GitHub',
      value: 'github.com/username',
      link: 'https://github.com/username',
      buttonText: 'View Profile',
    },
    {
      icon: <Linkedin className="w-6 h-6 text-blue-500" />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/username',
      link: 'https://linkedin.com/in/username',
      buttonText: 'Connect',
    },
  ];
  return (
    <div className="max-w-4xl mx-auto">
      <FadeIn>
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">Let's Connect</h1>
          <p className="text-gray-600 dark:text-gray-300">Have a question or want to work together? Reach out!</p>
        </div>
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          {contactInfo.map((contact, index) => (
            <ContactCard key={index} icon={contact.icon} title={contact.title} value={contact.value} link={contact.link} buttonText={contact.buttonText} delay={100 + index * 100} />
          ))}
        </div>
        <div>
          <MessageForm />
        </div>
      </div>
    </div>
  );
};

export default Messages;
