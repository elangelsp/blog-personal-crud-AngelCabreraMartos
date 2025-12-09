const apiUrl = import.meta.env.VITE_API_URL;

// Login de usuario
export const loginUser = async (username, password) => {
    try {
        console.log(`${apiUrl}/api/login`);
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
        console.log(data);

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