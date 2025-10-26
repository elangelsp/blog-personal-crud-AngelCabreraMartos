import React from 'react'

const PostCard = ({ post }) => {

  return (
    <div className="shadow-md rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold mb-2">{post.title}</h2>
        <span className="flex items-center gap-2">
          <strong>Tags</strong>:
          {
            post.tags.map(tag => {
              return (
                <p>{tag}</p>
              )
            })
          }
        </span>
      </div>
      <p className="text-700">{post.excerpt}</p>
      <p className="text-700">{post.content}</p>
      <p className="text-orange-400"><strong>Autor</strong> : {post.authorName}</p>
    </div>
  )
}

export default PostCard;
