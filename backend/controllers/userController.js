import dotenv from 'dotenv';
dotenv.config();

const DB_URL = process.env.DB_URL;

const fetchUsers = async () => {
  console.log(DB_URL);
    const response = await fetch(`${DB_URL}/users`);
    const users = await response.json();
    return users;
}

// Login de usuario
export const loginUser = async (req, res) => {
  try{
    const { username, password } = req.body;
    const users = await fetchUsers();

    for (const user of users) {
      if (user.username === username && user.password === password) {
        return res.status(200).json({ message: 'Login successful', success: true, name: user.name } );
      }
    }

    return res.status(401).json({ message: 'Invalid credentials', success: false });
      
  }catch(error){
    res.status(500).json({ message: 'Error al iniciar sesión', success: false });
  }
}

// Registro de usuario
export const registerUser = async (req, res) => {
    try {
      const user = req.body;

      console.log(user);

      const oldUsers = await fetchUsers();

      for (const existingUser of oldUsers) {
        if (existingUser.username === user.username) {
          return res.status(409).json({ message: 'El nombre de usuario ya existe', success: false });
        }
      }

      await fetch(`${DB_URL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          id: oldUsers.length + 1,
          username: user.username,
          password: user.password,
          name: user.name,
          role: "invitado"
        })
      });

      res.status(201).json({ message: 'Usuario registrado con éxito', success: true, name: user.name });

    } catch (error) {
      res.status(500).json({ message: 'Error al registrar usuario', success: false });
    };
}

