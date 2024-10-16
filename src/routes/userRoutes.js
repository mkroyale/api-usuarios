const express = require('express');
const router = express.Router();

// Lista de nomes predefinidos
const names = ['Alice', 'Bob', 'Carol', 'David', 'Eva', 'Frank', 'Grace', 'Helen', 'Ivy', 'Jack', 
              'Kathy', 'Leo', 'Mona', 'Nina', 'Oscar', 'Paul', 'Quincy', 'Rita', 'Steve', 'Tina',
              'Uma', 'Vince', 'Wendy', 'Xander', 'Yara', 'Zane', 'Ana', 'Bruno', 'Carlos', 'Diana',
              'Eduardo', 'Fernanda', 'Gustavo', 'Henrique', 'Isabel', 'João', 'Karen', 'Lucas', 
              'Marcos', 'Natalia', 'Olga', 'Pedro', 'Quintino', 'Renata', 'Sofia', 'Thiago', 'Ursula', 
              'Victor', 'William', 'Ximena', 'Yuri', 'Zilda'];

// Função para gerar usuários a partir dos nomes
const generateUsers = (names) => {
  const users = names.map((name, index) => ({
    id: index + 1,  // ID automático começando de 1
    name: name      // O nome vem do array de nomes predefinidos
  }));
  return users;
};

const users = generateUsers(names);  // Gera os usuários a partir da lista de nomes

// Definir a rota GET para "/users"
router.get('/users', (req, res) => {
  res.json(users);  // Retorna a lista de usuários em formato JSON
});

module.exports = router;
