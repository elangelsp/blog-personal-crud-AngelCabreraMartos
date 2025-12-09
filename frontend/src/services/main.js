const apiUrl = import.meta.env.VITE_API_URL;

// Login de usuario
export const loginUser = async (username, password) => {
    try {
        const response = await fetch(`${apiUrl}/api/login`, {
            method: 'POST',
            headers: {  
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });
        const data = await response.json();

        if (data.success) {
            console.log("Login succesfull");
            return data;
        }

        console.log("Login failed");

    } catch (error) {
        console.log(error);
    }
    
}

// Registro de usuario

export const registerUser = async (name, username, password) => {
    try {
        const response = await fetch(`${apiUrl}/api/register`, {
            method: 'POST',
            headers: {  
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password, name })
        });
        const data = await response.json();

        if (data.success) {
            console.log("Usuario registrado con exito");
            return data;
        }

        console.log("Register failed");

    }catch (error) {
        console.log(error);
    }
}

// Obtener posts
export const fetchPosts = async () => {
    try {
        
        const response = await fetch(`${apiUrl}/api/posts`, {
            method: 'GET',
            headers: {  
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();

        if(data.success){
            return data;
        }
        console.log("Error al obtener los posts");
        

    } catch (error) {
        console.log(error);
    }
}

export const fetchPostById = async (postId) => {
    try {
        const response = await fetch(`${apiUrl}/api/posts/${postId}`, {
            method: 'GET',
            headers: {  
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();

        if(data.success){
            return data;
        }
        console.log("Error al obtener el post");

    } catch (error) {
        console.log(error);
    }
}

export const fetchPostsByAuthorId = async (authorId) => {
    try {
        const response = await fetch(`${apiUrl}/api/posts/author/${authorId}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })
        const data = await response.json();

        if(data.success){
            return data;
        }

    } catch (error) {
        console.log(error);
    }
}

export const editPost = async (postId, title, slug, authorId, authorName, excerpt, content, coverImage, tags, published) => {
    try {
        
        const response = await fetch(`${apiUrl}/api/posts/edit/${postId}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ title, slug, authorId, authorName, excerpt, content, coverImage, tags, published })
        });
        const data = await response.json();

        if(data.success){
            console.log(data.message);
        }

        console.log(data.message);

    } catch (error) {
        console.log(error);
    }
}

export const deletePost = async (postId) => {
    try {
        
        const response = await fetch(`${apiUrl}/api/posts/delete/${postId}`, {
            method: 'DELETE'
        });
        const data = await response.json();

        if(data.success){
            console.log(data.message);
        }

    } catch (error) {
        console.log(error);
    }
}

export const crearPost = async (title, slug, authorId, authorName, excerpt, content, coverImage, tags, published) => {
    try {
        
        const response = await fetch(`${apiUrl}/api/posts/crear`, {
            method: 'POST',
            headers: {  
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, slug, authorId, authorName, excerpt, content, coverImage, tags, published })
        })

        const data = await response.json();

        if(data.success){
            return console.log(data.message);
        }

        console.log(data.message);

    } catch (error) {
        console.log(error);
    }
}

// Comentarios

export const fetchCommentsByPostId = async (postId) => {
    try {
        const response = await fetch(`${apiUrl}/api/posts/${postId}/comments`, {
            method: 'GET',
            headers: {  
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();

        if(data.success){
            return data;
        }
        console.log("Error al obtener los comentarios");

    } catch (error) {
        console.log(error);
    }
} 

export const sendComment = async (postId, author, content) => {
    try {
        
        const response = await fetch(`${apiUrl}/api/posts/comments/post`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                postId: postId,
                author: author,
                content: content,
            })
        });
        const data = await response.json();

        if(data.success){
            console.log("Comentario posteado con exito");
            return data;
        }

        console.log("Error al postear el comentario");

    } catch (error) {
        console.log(error);
    }
}

// Tags

export const getAllTags = async () => {
    try {
        
        const response = await fetch(`${apiUrl}/api/tags`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();

        if(data.success){
            return data.tags
        }

    } catch (error) {
        console.log(error);
    }
}