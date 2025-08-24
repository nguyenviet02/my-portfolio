import { FadeIn } from '@/components/Animation';
import { Button } from '@/components/ui/button';
import SpotlightCard from '@react-bits/Components/SpotlightCard/SpotlightCard';

const MessageForm = () => (
  <FadeIn delay={300}>
    <SpotlightCard 
      spotlightColor="rgba(0, 229, 255, 0.1)" 
      className="bg-white dark:bg-[#242526] rounded-lg shadow p-0 h-full"
    >
      <div className="p-4 sm:p-5 lg:p-6 h-full">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4 sm:mb-5">
          Send Me a Message
        </h2>
        <form className="space-y-4 sm:space-y-5">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#3A3B3C] text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 cursor-target text-sm sm:text-base"
              placeholder="Your name"
            />
          </div>
          
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#3A3B3C] text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 cursor-target text-sm sm:text-base"
              placeholder="Your email"
            />
          </div>
          
          {/* Subject Field */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#3A3B3C] text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 cursor-target text-sm sm:text-base"
              placeholder="Subject"
            />
          </div>
          
          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#3A3B3C] text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 cursor-target text-sm sm:text-base resize-none"
              placeholder="Your message..."
            />
          </div>
          
          {/* Submit Button */}
          <Button 
            type="submit" 
            className="w-full bg-blue-500 text-white hover:bg-blue-600 cursor-target py-2 sm:py-3 text-sm sm:text-base font-medium transition-all duration-200"
          >
            Send Message
          </Button>
        </form>
      </div>
    </SpotlightCard>
  </FadeIn>
);

export default MessageForm;
