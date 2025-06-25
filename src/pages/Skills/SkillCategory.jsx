import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SlideIn } from '@/components/Animation';

const SkillCategory = ({ category, items, icon, delay = 0, color }) => {
  const [hovered, setHovered] = useState(null);

  return (
    <SlideIn delay={delay}>
      <div className="bg-white dark:bg-[#242526] rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
        <div className={`p-5 flex items-center gap-4 border-b border-gray-100 dark:border-gray-800`}>
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${color}`}>{icon}</div>
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{category}</h3>
        </div>

        <div className="p-5">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {items.map((item, idx) => (
              <div key={idx} className="relative group cursor-pointer" onMouseEnter={() => setHovered(idx)} onMouseLeave={() => setHovered(null)}>
                <div
                  className={`
                  p-3 rounded-md border border-gray-200 dark:border-gray-700
                  flex items-center justify-between
                  transition-all duration-300
                  ${hovered === idx ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800' : 'bg-gray-50 dark:bg-[#3A3B3C]'}
                `}
                >
                  <div className="flex items-center gap-2">
                    <img src={item.icon} alt={item.name} className="w-4 h-4" />
                    <span className={`font-medium ${hovered === idx ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-200'}`}>{item.name}</span>
                  </div>
                  <ArrowUpRight className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity ${hovered === idx ? 'text-blue-500' : 'text-gray-500'}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideIn>
  );
};

export default SkillCategory;
