import { useEffect, useState } from 'react'
import { fetchPosts } from '../services/main'
import PostCard from './PostCard'

const PostList = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetchPosts()
    .then(data => {
      return data.json()
    })
    .then(postsData => {

      if(!postsData.posts) {
        return console.log("Error al obtener los posts");
      }

      setPosts(postsData.posts)

    })
    .catch(error => {
      console.log(error)
    })
  }, [])

  return (
    <>
      <div>
        <h2>Posts</h2>
        <div className="flex flex-col gap-4 p-4">
          {posts.map(post => {
            if (!post.published) return null; // si no está publicado, no renderiza nada
            return <PostCard key={post.id} post={post} />;
          })}
        </div>
      </div>
    </>
  )
}
 export default PostList;