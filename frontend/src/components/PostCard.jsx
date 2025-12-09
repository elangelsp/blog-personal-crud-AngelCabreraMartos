import React from 'react'
import { useNavigate } from 'react-router-dom';

const PostCard = ({ post }) => {
  const navigate = useNavigate();

  const handleShowPost = async (id) => {
    try {
      navigate(`/posts/${id}`);
    } catch (error) {
      console.log("Error cargando el", error) 
    }
  }

  return (
    <div className="shadow-md rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold mb-2">{post.title}</h2>
        <span className="flex items-center gap-2">
          <strong>Tags</strong>:
          {
            post.tags.map((tag, index) => {
              return (
                <p key={index}>{tag}</p>
              )
            })
          }
        </span>
      </div>
      <p className="text-700">{post.excerpt}</p>
      <p className="text-700">{post.content}</p>
      <p className="text-orange-400"><strong>Autor</strong> : {post.authorName}</p>
      <button onClick={() => handleShowPost(post.id)} className="text-orange-400"><strong>Ver</strong></button>
    </div>
  )
}

export default PostCard;
