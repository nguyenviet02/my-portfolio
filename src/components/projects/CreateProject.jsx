import { Image, Link, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import profile from '@/data/profile';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const CreateProject = () => {
  const textRef = useRef(null);
  const [displayText, setDisplayText] = useState('');
  const aboutText = profile.about;
  const tlRef = useRef();

  // Typing animation effect
  useEffect(() => {
    let currentText = '';
    const chars = aboutText.split('');

    // Reset animation if it exists
    if (tlRef.current) {
      tlRef.current.kill();
    }

    // Reset displayed text
    setDisplayText('');

    // Create new timeline
    const tl = gsap.timeline();
    tlRef.current = tl;

    // Add each character with a small delay to create typing effect
    chars.forEach((char, index) => {
      tl.add(() => {
        currentText += char;
        setDisplayText(currentText);
      }, index * 0.04); // 0.04 seconds delay between characters
    });

    return () => {
      if (tlRef.current) {
        tlRef.current.kill();
      }
    };
  }, [aboutText]);

  return (
    <div className="bg-white dark:bg-[#242526] rounded-lg shadow mb-4 p-4">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full overflow-hidden bg-gray-200">
          <img src={profile.avatar} alt="Profile" className="h-full w-full object-cover" />
        </div>
        <div className="flex-1 relative">
          <Textarea
            ref={textRef}
            value={displayText}
            readOnly
            className="bg-gray-100 dark:bg-[#3A3B3C] rounded-3xl  py-2 px-4 text-gray-600 dark:text-gray-300 text-left w-full hover:bg-gray-200 dark:hover:bg-[#4E4F50] transition-colors outline-none border-none resize-y"
          />
        </div>
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

export default CreateProject;
