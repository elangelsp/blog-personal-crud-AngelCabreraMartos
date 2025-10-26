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

        if (!response.ok) {
            console.log("Login failed");
        }

    return response.json();

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

        if (!response.ok) {
            console.log("Register failed");
        }

        return response.json();
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

        if (!response.ok) {
            console.log("Error al obtener los posts");
        }

        return response;

    } catch (error) {
        console.log(error);
    }
}