const express = require('express');
const app = express();
const userRoutes = require('./src/routes/userRoutes');  // Caminho para o arquivo de rotas

app.use(express.json());  // Middleware para lidar com JSON
app.use('/api', userRoutes);  // Conecta as rotas de usuários ao caminho /api

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
