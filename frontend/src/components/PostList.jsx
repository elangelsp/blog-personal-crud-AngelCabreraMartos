import { useEffect, useState } from 'react'
import { fetchPosts } from '../services/main'
import PostCard from './PostCard'

const PostList = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {

    const response = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data.posts);
      } catch (error) {
        console.log("Error al obtener los posts: ", error);
      }
    }

    response();
  }, [])

  return (
    <>
      <div>
        <h2>Posts</h2>
        <div className="flex flex-col gap-4 p-4">
          {posts.map(post => {
            if (!post.published) return null;
            return <PostCard key={post.id} post={post} />;
          })}
        </div>
      </div>
    </>
  )
}
 export default PostList;