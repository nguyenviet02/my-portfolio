import { SlideIn } from '@/components/Animation';
import { Button } from '@/components/ui/button';
import SpotlightCard from '@react-bits/Components/SpotlightCard/SpotlightCard';

const ContactCard = ({ icon, title, value, link, buttonText, delay }) => (
  <>
    <SlideIn delay={delay}>
      <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)" className="bg-white  dark:bg-[#242526] rounded-lg shadow mb-5 overflow-hidden p-0">
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
