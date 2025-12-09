import React, { useEffect, useState } from 'react'
import { crearPost, editPost, getAllTags } from '../services/main';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const PostForm = ({ 
  post, crear
}) => {

  const { user } = useContext(AuthContext);

  const [ postId, setPostId ] = useState(post.id)
  const [ titulo, setTitulo ] = useState(post.title);
  const [ slug, setSlug ] = useState(post.slug);
  const [ excerpt, setExcerpt ] = useState(post.excerpt);
  const [ content, setContent ] = useState(post.content);
  const [ coverImage, setCoverImage ] = useState(post.coverImage);
  const [ tags, setTags ] = useState(post.tags || []);
  const [ published, setPublished ] = useState(post.published);
  
  const [allTags, setAllTags] = useState([])

  const handleTagsChange = (e) => {
    const selected = [...e.target.selectedOptions].map(o => o.value);
    setTags(selected);
  };

  console.log(user.id);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if(crear){
        crearPost(titulo, slug, user.id, user.name, content, excerpt, coverImage, tags, published);
      }else{
        editPost(postId, slug, titulo, user.id, user.name, content, excerpt, coverImage, tags, published);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const response = async () => {
      try {
        const data = await getAllTags();
        setAllTags(data);
      } catch (error) {
        console.log(error);
      }
    }

    response();
  }, [])
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800 p-6">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-2xl">
        
        <h1 className="text-3xl font-bold mb-6 text-center text-black">
          { crear ? <strong>Crear</strong> : <strong>Editar</strong> }
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="block mb-1 font-semibold text-gray-700">Título</label>
            <input
              type="text"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              required
              className="w-full p-3 rounded-lg border border-gray-800 focus:ring-2 focus:ring-orange-500 focus:outline-none text-black"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-700">Slug</label>
            <input
              type="text"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              required
              className="w-full p-3 rounded-lg border border-gray-800 focus:ring-2 focus:ring-orange-500 focus:outline-none text-black"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-700">Excerpt</label>
            <input
              type="text"
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              required
              className="w-full p-3 rounded-lg border border-gray-800 focus:ring-2 focus:ring-orange-500 focus:outline-none text-black"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-700">Contenido</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows="5"
              required
              className="w-full p-3 rounded-lg border border-gray-800 focus:ring-2 focus:ring-orange-500 focus:outline-none text-black"
            ></textarea>
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-700">Cover Image</label>
            <input
              type="text"
              value={coverImage}
              onChange={(e) => setCoverImage(e.target.value)}
              required
              className="w-full p-3 rounded-lg border border-gray-800 focus:ring-2 focus:ring-orange-500 focus:outline-none text-black"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Tags (Ctrl/Cmd + Click para múltiples)
            </label>
            <select
              multiple
              value={tags}
              onChange={handleTagsChange}
              className="w-full p-3 rounded-lg border border-gray-800 focus:ring-2 focus:ring-orange-500 focus:outline-none h-32 text-black"
            >
              {post.tags.map((tag) => (
                <option key={tag} value={tag}>{tag}</option>
              ))}
            </select>
            <small className="text-gray-500">Seleccionados: {tags.join(', ')}</small>
          </div>
          <div className="flex items-center gap-3 mt-4">
            <input
              type="checkbox"
              checked={published}
              onChange={(e) => setPublished(e.target.checked)}
              className="w-5 h-5 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
            />

            <label className="text-gray-800 font-medium">
              {published ? "Publicado" : "No publicado"}
            </label>
          </div>

          <button 
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Guardar Post
          </button>

        </form>
      </div>
    </div>
  )
}

export default PostForm
