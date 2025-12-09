import { useContext, useEffect, useState } from 'react'
import { deletePost, fetchPostsByAuthorId } from '../services/main'
import PostCard from './PostCard'

import { AuthContext } from '../context/AuthContext'
import ModalComponent from './Modal'

const PostListUser = () => {
    const [posts, setPosts] = useState([])
    const { user } = useContext(AuthContext);

    const handleDeletePost = async (postId) => {
        try {
            const response = await deletePost(postId);
            if(response.success){
                console.log(response.message);
            }

        } catch (error) {
            console.log(error);
        }
    }

    console.log(posts);
  
    useEffect(() => {

        const response = async () => {
            try {
                const data = await fetchPostsByAuthorId(user.id);
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
                <h1>Dashboard</h1>
                <div className="flex flex-col gap-4 p-4">
                    {posts.map(post => {
                        console.log(post);
                        return (
                            <div className='shadow-md rounded-lg p-4'>
                                <PostCard key={post.id} post={post} />

                                <ModalComponent postData={post} crear={false}/>
                                <button onClick={() => handleDeletePost(post.id)} className="text-orange-400"><strong>Eliminar</strong></button>
                            </div>
                        ) 
                    })}
                </div>
                <div>
                    <ModalComponent />
                </div>
            </div>
        </>
    )
    }
    export default PostListUser;