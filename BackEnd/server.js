// app.js
const express = require('express');
const app = express();
const articleRoutes = require('./routes/articleRoutes');
const errorHandler = require('./utils/errorHandler');

app.use(express.json());
app.use('/api/articles', articleRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});