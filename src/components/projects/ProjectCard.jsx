import { useState } from 'react';
import { ThumbsUp, MessageSquare, Share2, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profile from '@/data/profile';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ProjectCard = ({ project }) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  // Function to render image grid based on number of images
  const renderImageGrid = (images) => {
    if (!images || images.length === 0) return null;

    if (images.length === 1) {
      return (
        <div className="w-full">
          <PhotoView src={images[0]}>
            <img src={images[0]} alt={project.title} className="w-full object-cover max-h-[500px] cursor-pointer" />
          </PhotoView>
        </div>
      );
    }

    // For 2 images - simple 2 columns
    if (images.length === 2) {
      return (
        <div className="grid grid-cols-2 gap-1">
          {images.map((image, index) => (
            <PhotoView key={index} src={image}>
              <img src={image} alt={`${project.title} - ${index + 1}`} className="w-full h-full object-cover cursor-pointer" style={{ aspectRatio: '16/9' }} />
            </PhotoView>
          ))}
        </div>
      );
    }

    // For 3 images - first image takes full width of left column, 2 other images stacked in right column
    if (images.length === 3) {
      return (
        <div className="grid grid-cols-2 gap-1">
          <PhotoView src={images[0]}>
            <div className="row-span-2 h-full">
              <img src={images[0]} alt={`${project.title} - 1`} className="w-full h-full object-cover cursor-pointer" style={{ aspectRatio: '1/2' }} />
            </div>
          </PhotoView>

          <div className="grid grid-rows-2 gap-1 h-full row-span-2">
            <PhotoView src={images[1]}>
              <img src={images[1]} alt={`${project.title} - 2`} className="w-full h-full object-cover cursor-pointer" />
            </PhotoView>
            <PhotoView src={images[2]}>
              <img src={images[2]} alt={`${project.title} - 3`} className="w-full h-full object-cover cursor-pointer" />
            </PhotoView>
          </div>
        </div>
      );
    }

    // For 4 or more images
    return (
      <div className="grid grid-cols-2 gap-1">
        {images.slice(0, 4).map((image, index) => (
          <PhotoView key={index} src={image}>
            <div className="relative">
              <img src={image} alt={`${project.title} - ${index + 1}`} className="w-full h-full object-cover cursor-pointer" style={{ aspectRatio: '1/1' }} />
              {index === 3 && images.length > 4 && (
                <div className="absolute inset-0 bg-[#000000a1] flex items-center justify-center cursor-pointer">
                  <span className="text-white text-2xl font-bold">+{images.length - 4}</span>
                </div>
              )}
            </div>
          </PhotoView>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white dark:bg-[#242526] rounded-lg shadow mb-4 overflow-hidden">
      {/* Project Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full overflow-hidden bg-gray-200">
            <img src={profile.avatar} alt={project.username} className="h-full w-full object-cover" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-100">{profile.name}</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {project.date} • {project.projectType}
            </p>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="rounded-full">
          <MoreHorizontal className="w-5 h-5 text-text-primary" />
        </Button>
      </div>

      {/* Project Content */}
      <div className="px-4 pb-3">
        <div className="text-gray-800 dark:text-gray-100 mb-3" dangerouslySetInnerHTML={{ __html: project.description }} />
      </div>

      {/* Project Images */}
      <PhotoProvider>{project.images && renderImageGrid(project.images)}</PhotoProvider>

      {/* Project Tech Stack */}
      {project.technologies && project.technologies.length > 0 && (
        <div className="px-4 pt-3 flex flex-wrap gap-1">
          {project.technologies.map((tech, index) => (
            <span key={index} className="bg-gray-100 dark:bg-[#3A3B3C] text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      )}

      {/* Project Stats */}
      <div className="flex items-center justify-between px-4 py-2 border-t border-b border-gray-200 dark:border-gray-700 mt-1">
        <div className="flex items-center gap-1">
          <span className="flex items-center justify-center rounded-full bg-blue-500 w-5 h-5 text-white">
            <ThumbsUp className="w-3 h-3" />
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">{project.likes}</span>
        </div>
        <div className="flex gap-3 text-sm text-gray-500 dark:text-gray-400">
          <span>{project.comments} comments</span>
          <span>{project.shares} shares</span>
        </div>
      </div>

      {/* Project Actions */}
      <div className="flex items-center px-2 py-1">
        <Button variant="ghost" onClick={toggleLike} className={`flex-1 rounded-md ${liked ? 'text-blue-500' : 'text-gray-600 dark:text-gray-300'}`}>
          <ThumbsUp className="w-5 h-5 mr-2" />
          Like
        </Button>
        <Button variant="ghost" className="flex-1 rounded-md text-gray-600 dark:text-gray-300">
          <MessageSquare className="w-5 h-5 mr-2" />
          Comment
        </Button>
        <Button variant="ghost" className="flex-1 rounded-md text-gray-600 dark:text-gray-300">
          <Share2 className="w-5 h-5 mr-2" />
          Share
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;
