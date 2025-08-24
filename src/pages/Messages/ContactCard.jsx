import { SlideIn } from '@/components/Animation';
import { Button } from '@/components/ui/button';
import SpotlightCard from '@react-bits/Components/SpotlightCard/SpotlightCard';

const ContactCard = ({ icon, title, value, link, buttonText, delay }) => (
  <>
    <SlideIn delay={delay}>
      <SpotlightCard 
        spotlightColor="rgba(0, 229, 255, 0.2)" 
        className="bg-white dark:bg-[#242526] rounded-lg shadow overflow-hidden p-0 h-full"
      >
        <div className="p-4 sm:p-5 lg:p-6 h-full flex flex-col">
          {/* Main content with icon and text */}
          <div className="flex items-center gap-3 sm:gap-4 flex-grow">
            <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-3 sm:p-4 flex-shrink-0">
              {icon}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base sm:text-lg font-medium text-gray-800 dark:text-gray-100 mb-1">
                {title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 break-all">
                {value}
              </p>
            </div>
          </div>
          
          {/* Action button */}
          {buttonText && link && (
            <div className="mt-4 sm:mt-5 lg:mt-6">
              <Button className="w-full cursor-target" asChild>
                <a href={link} className="text-white" target="_blank" rel="noopener noreferrer">
                  {buttonText}
                </a>
              </Button>
            </div>
          )}
        </div>
      </SpotlightCard>
    </SlideIn>
  </>
);

export default ContactCard;
