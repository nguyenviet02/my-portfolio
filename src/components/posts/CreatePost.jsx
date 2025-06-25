import { Image, Link, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CreatePost = () => {
  return (
    <div className="bg-white dark:bg-[#242526] rounded-lg shadow mb-4 p-4">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full overflow-hidden bg-gray-200">
          <img 
            src="/default.jpg" 
            alt="Profile" 
            className="h-full w-full object-cover"
          />
        </div>
        <button className="bg-gray-100 dark:bg-[#3A3B3C] rounded-full py-2 px-4 text-gray-600 dark:text-gray-300 text-left flex-1 hover:bg-gray-200 dark:hover:bg-[#4E4F50] transition-colors">
          What have you been working on?
        </button>
      </div>
      
      <div className="border-t border-gray-200 dark:border-gray-700 mt-3 pt-3">
        <div className="flex justify-between">
          <Button variant="ghost" className="flex-1 rounded-md text-gray-600 dark:text-gray-300">
            <Image className="w-5 h-5 mr-2" />
            Photo
          </Button>
          <Button variant="ghost" className="flex-1 rounded-md text-gray-600 dark:text-gray-300">
            <Link className="w-5 h-5 mr-2" />
            Link
          </Button>
          <Button variant="ghost" className="flex-1 rounded-md text-gray-600 dark:text-gray-300">
            <Code className="w-5 h-5 mr-2" />
            Code
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost; 