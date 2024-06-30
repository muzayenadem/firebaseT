// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./routes/api')
const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
// Test Route
// API Routes
app.use(router);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

