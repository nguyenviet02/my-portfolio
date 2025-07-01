import React from 'react';
import CreatePost from '@/components/projects/CreateProject';
import ProjectCard from '@/components/projects/ProjectCard';
import { FadeIn, SlideIn } from '@/components/Animation';
import { projects } from '@/data';

const Home = () => {
  return (
    <div className="max-w-xl mx-auto">
      <FadeIn delay={100}>
        <CreatePost />
      </FadeIn>

      {projects.map((project, index) => (
        <SlideIn key={project.id} delay={200 + index * 100}>
          <ProjectCard project={project} />
        </SlideIn>
      ))}
    </div>
  );
};

export default Home;
