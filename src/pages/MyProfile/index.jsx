import { useState } from 'react';
import { Pencil, MapPin, Briefcase, BookOpen, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PostCard from '@/components/posts/PostCard';
import { FadeIn, SlideIn } from '@/components/Animation';

const ProfileSection = ({ title, children, delay = 0 }) => (
  <SlideIn delay={delay}>
    <div className="bg-white dark:bg-[#242526] rounded-lg shadow mb-4 p-4">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">{title}</h3>
      {children}
    </div>
  </SlideIn>
);

const MyProfile = () => {
  const [activeTab, setActiveTab] = useState('posts');
  
  // Sample profile data
  const profile = {
    name: 'John Doe',
    title: 'Full Stack Developer',
    location: 'San Francisco, CA',
    coverImage: 'https://via.placeholder.com/1200x400',
    about: 'Passionate full stack developer with 5 years of experience building web and mobile applications. Specialized in React, Node.js, and cloud technologies.'
  };

  // Sample project posts
  const projects = [
    {
      id: 1,
      username: profile.name,
      userImage: '/default.jpg',
      date: 'June 15, 2024',
      projectType: 'Web Development',
      title: 'E-commerce Platform',
      description: 'Just launched a new e-commerce platform built with React, Node.js and MongoDB.',
      image: 'https://via.placeholder.com/800x400',
      technologies: ['React', 'Node.js', 'MongoDB'],
      likes: 24,
      comments: 5,
      shares: 2
    },
    {
      id: 2,
      username: profile.name,
      userImage: '/default.jpg',
      date: 'May 22, 2024',
      projectType: 'Mobile App',
      title: 'Fitness Tracker',
      description: 'Developed a fitness tracking app that helps users monitor their workouts.',
      image: 'https://via.placeholder.com/800x400',
      technologies: ['React Native', 'Firebase'],
      likes: 37,
      comments: 8,
      shares: 4
    }
  ];

  // Sample skills data
  const skills = [
    { category: 'Frontend', items: ['React', 'JavaScript', 'CSS/SCSS', 'HTML5', 'Redux', 'TypeScript'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Firebase'] },
    { category: 'DevOps', items: ['Docker', 'CI/CD', 'AWS', 'Git'] },
    { category: 'Tools', items: ['VSCode', 'Figma', 'Postman', 'Jira'] }
  ];

  return (
    <div>
      {/* Cover Photo */}
      <FadeIn>
        <div className="relative h-[200px] md:h-[350px] w-full bg-gray-300 rounded-b-lg overflow-hidden">
          <img 
            src={profile.coverImage} 
            alt="Cover" 
            className="w-full h-full object-cover"
          />
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute bottom-4 right-4 bg-white dark:bg-[#3A3B3C] rounded-full shadow"
          >
            <Pencil className="w-5 h-5" />
          </Button>
        </div>
      </FadeIn>

      {/* Profile Info */}
      <div className="relative px-4 md:px-8">
        {/* Profile Picture */}
        <SlideIn direction="up">
          <div className="absolute -top-24 left-6 h-40 w-40 rounded-full border-4 border-white dark:border-[#242526] overflow-hidden bg-white shadow">
            <img 
              src="/default.jpg" 
              alt={profile.name} 
              className="h-full w-full object-cover"
            />
          </div>
        </SlideIn>
        
        {/* Name and Title */}
        <FadeIn delay={200}>
          <div className="pt-20 pb-4 flex flex-col md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">{profile.name}</h1>
              <p className="text-gray-600 dark:text-gray-300">{profile.title}</p>
              <div className="flex items-center mt-1 text-gray-500 dark:text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mr-1" />
                {profile.location}
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <Button>Edit Profile</Button>
            </div>
          </div>
        </FadeIn>

        {/* Navigation Tabs */}
        <FadeIn delay={300}>
          <div className="border-t border-gray-300 dark:border-gray-700">
            <div className="flex">
              <button
                onClick={() => setActiveTab('posts')}
                className={`px-4 py-3 font-medium ${
                  activeTab === 'posts'
                    ? 'text-blue-500 border-b-2 border-blue-500'
                    : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                Posts
              </button>
              <button
                onClick={() => setActiveTab('about')}
                className={`px-4 py-3 font-medium ${
                  activeTab === 'about'
                    ? 'text-blue-500 border-b-2 border-blue-500'
                    : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                About
              </button>
              <button
                onClick={() => setActiveTab('skills')}
                className={`px-4 py-3 font-medium ${
                  activeTab === 'skills'
                    ? 'text-blue-500 border-b-2 border-blue-500'
                    : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                Skills
              </button>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        {activeTab === 'posts' && (
          <div>
            {projects.map((project, index) => (
              <SlideIn key={project.id} delay={200 + (index * 100)}>
                <PostCard post={project} />
              </SlideIn>
            ))}
          </div>
        )}

        {activeTab === 'about' && (
          <div>
            <ProfileSection title="About" delay={100}>
              <p className="text-gray-800 dark:text-gray-100">{profile.about}</p>
            </ProfileSection>

            <ProfileSection title="Experience" delay={200}>
              <div className="space-y-4">
                <div className="flex">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-10 h-10 bg-gray-200 dark:bg-[#3A3B3C] rounded flex items-center justify-center">
                      <Briefcase className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-gray-100">Senior Developer</h4>
                    <p className="text-gray-600 dark:text-gray-300">Tech Company Inc.</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">2020 - Present</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-10 h-10 bg-gray-200 dark:bg-[#3A3B3C] rounded flex items-center justify-center">
                      <Briefcase className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-gray-100">Web Developer</h4>
                    <p className="text-gray-600 dark:text-gray-300">Digital Solutions Co.</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">2018 - 2020</p>
                  </div>
                </div>
              </div>
            </ProfileSection>

            <ProfileSection title="Education" delay={300}>
              <div className="flex">
                <div className="flex-shrink-0 mr-3">
                  <div className="w-10 h-10 bg-gray-200 dark:bg-[#3A3B3C] rounded flex items-center justify-center">
                    <BookOpen className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-100">Computer Science, B.S.</h4>
                  <p className="text-gray-600 dark:text-gray-300">University of Technology</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">2014 - 2018</p>
                </div>
              </div>
            </ProfileSection>
          </div>
        )}

        {activeTab === 'skills' && (
          <div>
            {skills.map((skill, index) => (
              <ProfileSection key={index} title={skill.category} delay={100 + (index * 100)}>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-100 dark:bg-[#3A3B3C] text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </ProfileSection>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
