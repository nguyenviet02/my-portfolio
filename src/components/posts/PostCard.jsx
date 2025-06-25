import { useState } from 'react';
import { ThumbsUp, MessageSquare, Share2, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PostCard = ({ post }) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="bg-white dark:bg-[#242526] rounded-lg shadow mb-4 overflow-hidden">
      {/* Post Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full overflow-hidden bg-gray-200">
            <img 
              src={post.userImage || "/default.jpg"} 
              alt={post.username} 
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-100">{post.username}</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {post.date} • {post.projectType}
            </p>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="rounded-full">
          <MoreHorizontal className="w-5 h-5" />
        </Button>
      </div>

      {/* Post Content */}
      <div className="px-4 pb-3">
        <p className="text-gray-800 dark:text-gray-100 mb-3">{post.description}</p>
      </div>

      {/* Post Image */}
      {post.image && (
        <div className="w-full">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full object-cover max-h-[500px]"
          />
        </div>
      )}

      {/* Post Tech Stack */}
      {post.technologies && post.technologies.length > 0 && (
        <div className="px-4 pt-3 flex flex-wrap gap-1">
          {post.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-100 dark:bg-[#3A3B3C] text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {/* Post Stats */}
      <div className="flex items-center justify-between px-4 py-2 border-t border-b border-gray-200 dark:border-gray-700 mt-1">
        <div className="flex items-center gap-1">
          <span className="flex items-center justify-center rounded-full bg-blue-500 w-5 h-5 text-white">
            <ThumbsUp className="w-3 h-3" />
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">{post.likes}</span>
        </div>
        <div className="flex gap-3 text-sm text-gray-500 dark:text-gray-400">
          <span>{post.comments} comments</span>
          <span>{post.shares} shares</span>
        </div>
      </div>

      {/* Post Actions */}
      <div className="flex items-center px-2 py-1">
        <Button
          variant="ghost"
          onClick={toggleLike}
          className={`flex-1 rounded-md ${
            liked ? 'text-blue-500' : 'text-gray-600 dark:text-gray-300'
          }`}
        >
          <ThumbsUp className="w-5 h-5 mr-2" />
          Like
        </Button>
        <Button
          variant="ghost"
          className="flex-1 rounded-md text-gray-600 dark:text-gray-300"
        >
          <MessageSquare className="w-5 h-5 mr-2" />
          Comment
        </Button>
        <Button
          variant="ghost"
          className="flex-1 rounded-md text-gray-600 dark:text-gray-300"
        >
          <Share2 className="w-5 h-5 mr-2" />
          Share
        </Button>
      </div>
    </div>
  );
};

export default PostCard; 