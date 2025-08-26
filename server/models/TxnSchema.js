const mongoose = require('mongoose');

// Define the Transaction Schema
const TxnSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Reference to the User model
      required: true,
    },
    title: {
      type: String,
      required: [true, 'Title is required'], // Ensure the title is provided
      trim: true, // Remove extra whitespace
    },
    amount: {
      type: Number,
      required: [true, 'Amount is required'],
      min: [0, 'Amount must be a positive number'], // Ensure the amount is non-negative
    },
    type: {
      type: String,
      enum: ['income', 'expense'], // Only allow "income" or "expense"
      required: [true, 'Type is required'],
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      trim: true,
    },
    date: {
      type: Date,
      default: Date.now, // Default to the current date if not provided
    },
  },
  { timestamps: true } // Add createdAt and updatedAt fields automatically
);

// Create the Transaction Model.
module.exports = mongoose.model('Txn', TxnSchema);