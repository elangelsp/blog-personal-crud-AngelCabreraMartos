import dotenv from 'dotenv';
dotenv.config();

const DB_URL = process.env.DB_URL;

const fetchPosts = async (req, res) => {
  try {
    
    const response = await fetch(`${DB_URL}/posts`);
    const posts = await response.json();
    res.status(200).json({ posts, success: true });

  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los posts', success: false });
  }
}

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

export const getPostsByAuthorId = async (req, res) => {
  try {

    const response = await fetch(`${DB_URL}/posts?authorId=${req.params.id}&_sort=createdAt&_order=desc`);
    const posts = await response.json();

    console.log(posts.length);

    res.status(200).json({ posts, success: true })

  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los post', success: false })
  }
}

export const editPosts = async (req, res) => {
  try {

    const post = req.body

    const response = await fetch(`${DB_URL}/posts/${req.params.id}`, {
      method: 'PUT',
      headers: {
                'Content-type': 'application/json'
            },
      body: JSON.stringify({
        id: req.params.id, 
        title: post.title,
        slug: post.slug,
        authorId: Number(post.authorId),
        authorName: post.authorName, 
        excerpt: post.excerpt,
        content: post.content, 
        coverImage: post.coverImage, 
        tags: post.tags, 
        published: post.published,  
        createdAt: new Date(),
        updatedAt: new Date()
      })
    });
    const data = await response.json();

    res.status(200).json({ message: "Post editado correctamente", success: true })

  } catch (error) {
    res.status(500).json({ message: "Error al editar el post", success: false })
  }
}

export const deletePosts = async (req, res) => {
  try {
    
    const response = await fetch(`${DB_URL}/posts/${req.params.id}`, {
      method: 'DELETE',
    });
    const data = await response.json();

    res.status(200).json({ message: "El post se elmino correctamente", success: true })
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el post", success: false })
  }
}

export const crearPost = async (req, res) => {
  try {

    const post = req.body

    const posts = await fetch(`${DB_URL}/posts`, {
      method: 'GET',
    })
    const postsData = await posts.json();

    const response = await fetch(`${DB_URL}/posts`, {
      method: 'POST',
      headers: {  
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: postsData.length + 1, 
        title: post.title,
        slug: post.slug,
        authorId: Number(post.authorId),
        authorName: post.authorName,
        excerpt: post.excerpt,
        content: post.content, 
        coverImage: post.coverImage, 
        tags: post.tags, 
        published: post.published,  
        createdAt: new Date(),
        updatedAt: new Date()
      })
    })

    const data = await response.json();

    res.status(200).json({ message: "Post creado correctamente", success: true })


  } catch (error) {
    res.status(500).json({ message: "Error al crear el post", success: false })
  }
}