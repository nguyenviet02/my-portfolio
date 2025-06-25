import { Code2, Database, ServerIcon, Wrench, Sparkles } from 'lucide-react';
import { skills } from '@/data';
import { FadeIn } from '@/components/Animation';
import SkillCategory from './SkillCategory';

const Skills = () => {
  // Map category to icon and color
  const categoryProps = {
    Frontend: {
      icon: <Code2 className="w-6 h-6 text-white" />,
      color: 'bg-gradient-to-br from-blue-500 to-blue-600',
    },
    Backend: {
      icon: <Database className="w-6 h-6 text-white" />,
      color: 'bg-gradient-to-br from-purple-500 to-purple-600',
    },
    DevOps: {
      icon: <ServerIcon className="w-6 h-6 text-white" />,
      color: 'bg-gradient-to-br from-green-500 to-green-600',
    },
    Tools: {
      icon: <Wrench className="w-6 h-6 text-white" />,
      color: 'bg-gradient-to-br from-amber-500 to-amber-600',
    },
  };

  return (
    <div className="max-w-4xl mx-auto">
      <FadeIn>
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-4">Technical Skills</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Here's a comprehensive overview of my technical expertise and toolset</p>
        </div>
      </FadeIn>

      <div className="space-y-6">
        {skills.map((skill, index) => (
          <SkillCategory
            key={skill.category}
            category={skill.category}
            items={skill.items}
            icon={categoryProps[skill.category]?.icon}
            color={categoryProps[skill.category]?.color}
            delay={index * 150}
          />
        ))}
      </div>

      <FadeIn delay={600}>
        <div className="flex justify-center mt-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded-full text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            <span>Always learning and expanding my skillset</span>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default Skills;
