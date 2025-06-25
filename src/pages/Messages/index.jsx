import { Button } from '@/components/ui/button';
import { FadeIn, SlideIn } from '@/components/Animation';
import { contactInfo } from '@/data';

const ContactCard = ({ icon, title, value, link, buttonText, delay }) => (
  <SlideIn delay={delay}>
    <div className="bg-white dark:bg-[#242526] rounded-lg shadow mb-5 overflow-hidden">
      <div className="p-6">
        <div className="flex items-center gap-4">
          <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-4">{icon}</div>
          <div className="flex-1">
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100">{title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{value}</p>
          </div>
        </div>
        {buttonText && link && (
          <div className="mt-6">
            <Button className="w-full" asChild>
              <a href={link} target="_blank" rel="noopener noreferrer">
                {buttonText}
              </a>
            </Button>
          </div>
        )}
      </div>
    </div>
  </SlideIn>
);

const MessageForm = () => (
  <FadeIn delay={300}>
    <div className="bg-white dark:bg-[#242526] rounded-lg shadow mb-5 p-6">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Send Me a Message</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#3A3B3C] text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#3A3B3C] text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your email"
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#3A3B3C] text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Subject"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#3A3B3C] text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your message..."
          />
        </div>
        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </form>
    </div>
  </FadeIn>
);

const Messages = () => {
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
