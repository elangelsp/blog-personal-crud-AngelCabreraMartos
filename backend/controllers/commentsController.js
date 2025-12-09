import dotenv from 'dotenv';
dotenv.config();

const DB_URL = process.env.DB_URL;

const fetchComments = async () => {
    try {
        
        const response = await fetch(`${DB_URL}/comments`);
        const data = await response.json();
        return data;

    } catch (error) {
        console.log("Error fetch comments: ", error);
    }
}

export const getCommentsByPostId = async (req, res) => {
    try {

        const response = await fetch(`${DB_URL}/comments?postId=${req.params.id}&_sort=createdAt&_order=desc`);
        const comments = await response.json();
        res.status(200).json({ comments, success: true });

    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los comentarios', success: false });
    }
}

export const sendComment = async (req, res) => {
    try {
        const { postId, author, content } = req.body
        console.log(postId, author, content);
        const oldComments = await fetchComments();

        const response = await fetch(`${DB_URL}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          id: oldComments.length + 1,
          postId: postId,
          author: author,
          content: content,
          createdAt: new Date()
        })
      });

      res.status(201).json({ message: "Comentario publicado correctamente", success: true })

    } catch (error) {
        res.status(500).json({ message: 'Error al postear el comentario', success: false})
    }
}