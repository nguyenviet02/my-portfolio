import React from 'react';
import CreatePost from '@/components/posts/CreatePost';
import PostCard from '@/components/posts/PostCard';
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
          <PostCard post={project} />
        </SlideIn>
      ))}
    </div>
  );
};

export default Home;
