import React, { useContext, useEffect, useState } from 'react'
import { fetchCommentsByPostId, fetchPostById, sendComment } from '../services/main';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const PostDetailPage = () => {
    const { user, isLoggedIn } = useContext(AuthContext);
    
    const { id } = useParams();

    const [post, setPost] = useState([]);
    const [comments, setComments] = useState([]);

    const [newComment, setNewComment] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let name = "";
            isLoggedIn() ? name = user.name : name = "Invitado";

            const response =  await sendComment(id, name, newComment);

            if(response.success){
                window.location.reload();
            }

        } catch (error) {
         console.log("Sending comment failed: ", error);   
        }
    }

    useEffect(() => {
        
        const response = async () => {
            try {
                const data = await fetchPostById(id);
                setPost(data.post);
            } catch (error) {
                console.log("Error al obtener el post: ", error);
            }
        }

        const commentsResponse = async () => {
            try {
                const data = await fetchCommentsByPostId(id)
                setComments(data.comments);
            } catch (error) {
                console.log("Error al obtener los comentarios: ", error);
            }
        }

        response();
        commentsResponse();

    }, [id]);

  return (
    <>  
        <div>
            <div className="max-w-2xl mx-auto p-6 shadow-md rounded-lg mt-6">
                <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
                <p className=" mb-4">{post.content}</p>
                <div className="flex justify-between text-sm text-gray-500">
                    <span>Autor: {post.authorName}</span>
                    <span>Fecha: {new Date(post.createdAt).toLocaleDateString()}</span>
                </div>
            </div>

            <div>
                <h1 className="text-2xl font-bold mb-4 mt-6 text-center">Comentarios</h1>
                {
                    comments.map(comment => {
                        return (
                            <div key={comment.id} className="max-w-2xl mx-auto p-4 shadow-md rounded-lg mb-4">
                                <p className="mb-2">{comment.content}</p>
                                <div className="flex justify-between text-sm text-gray-500">
                                    <span>Autor: {comment.author}</span>
                                    <span>Fecha: {new Date(comment.createdAt).toLocaleDateString()}</span>
                                </div>
                            </div>
                        )
                    })
                }
                <div>
                    <form onSubmit={handleSubmit}>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={newComment}
                                    onChange={(e) => setNewComment(e.target.value)}
                                    placeholder="Escribe tu comentario..."
                                    required
                                    className="flex-1 p-3 rounded-l-md bg-gray-800 text-white border border-gray-600 border-r-0 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder-gray-400"
                                />
                                <button
                                    type="submit"
                                    className="p-3 bg-orange-400 text-black font-semibold rounded-r-md hover:bg-orange-500 transition-colors"
                                >
                                    Postear
                                </button>
                            </div>
                        </form>
                    
                </div>
            </div> 
        </div>
        
    
    </>
  )
}

export default PostDetailPage