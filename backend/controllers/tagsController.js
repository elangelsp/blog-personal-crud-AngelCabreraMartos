import dotenv from 'dotenv';
dotenv.config();

const DB_URL = process.env.DB_URL;

export const getAllTags = async (req, res) => {
    try {
        
        const response = await fetch(`${DB_URL}/categories`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();

        res.status(200).json({ tags: data, message: "Se obtuvieron todos los tags correctamente", success: true })

    } catch (error) {
        res.status(500).json({ message: "Error al obtener todos los tags", success: false })
    }
}