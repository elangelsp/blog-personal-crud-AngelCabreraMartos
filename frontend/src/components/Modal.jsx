import React, { useState } from 'react'
import PostForm from './PostForm';

const ModalComponent = (
    { postData = {
        id: null,
        title: "Titulo", 
        slug: "slug", 
        excerpt: "excerpt", 
        content: "content", 
        coverImage: "coverImage", 
        tags: ["tag"], 
        published: true 
    }, 
    crear = true 
  }) => {

  const [show, setShow] = useState(false);

  return (
    <div>
      
      <button 
        onClick={() => setShow(true)}
        className="px-4 py-2 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white transition"
      >
        { crear ? ( <strong>Crear Post</strong> ) : ( <strong>Editar</strong> ) }
      </button>

      {show && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">

          <div className="bg-gray-800 rounded-xl shadow-2xl w-full max-w-2xl p-6 animate-[fadeIn_0.2s_ease]">
            
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">{ crear ? ( <strong>Crear Post</strong> ) : ( <strong>Editar Post</strong> ) }</h2>
              <button 
                onClick={() => setShow(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
              >
                ×
              </button>
            </div>

            <div className="max-h-[70vh] overflow-y-auto pr-1">
              <PostForm post={postData} crear={crear} />
            </div>

            <div className="mt-6 flex justify-end gap-2">
              <button 
                onClick={() => setShow(false)}
                className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
              >
                Cerrar
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  )
}

export default ModalComponent
