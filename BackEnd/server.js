// server.js
const express = require('express');
const server = express();
const articleRoutes = require('./routes/articleRoutes');
const studentRoutes = require('./routes/studentRoutes');
const errorHandler = require('./utils/errorHandler');

server.use(express.json());
server.use('/api/articles', articleRoutes);
server.use('/api/students', studentRoutes);
server.use(errorHandler);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});