const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const txnRoutes = require('./routes/txnRoutes')
const cors = require('cors');

dotenv.config();
const app = express();

// Middleware
app.use(cors())
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

//routes
app.use('/api/auth', authRoutes)
app.use('/api/transactions', txnRoutes)

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
