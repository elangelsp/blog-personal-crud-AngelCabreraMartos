import dotenv from 'dotenv';
dotenv.config();

const DB_URL = process.env.DB_URL;

export const getPosts = async (req, res) => {
  try {
    
    const response = await fetch(`${DB_URL}/posts?_sort=createdAt&_order=desc`);
    const posts = await response.json();
    res.status(200).json({ posts, success: true });

  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los posts', success: false });
  }
}

export const getPostById = async (req, res) => {
    try {
        
        const response = await fetch(`${DB_URL}/posts/${req.params.id}`);
        const post = await response.json();
        res.status(200).json({ post, success: true });
        
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el post', success: false });
    }
}