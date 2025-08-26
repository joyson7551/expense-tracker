const express = require('express');
const { protect } = require('../middlewares/authMiddleware');
const {
  addTransaction,
  getTransactions,
  updateTransaction,
  deleteTransaction,
  getTransactionSummary,
  getCategories,
  getTransactionById
} = require('../controllers/txnControllers');

const router = express.Router();

// Protect all routes
router.use(protect);

// Add a transaction
router.post('/', addTransaction);

// Get all transactions
router.get('/', getTransactions);

// Update a transaction
router.put('/:id', updateTransaction);

// Delete a transaction
router.delete('/:id', deleteTransaction);

// Get transaction summary
router.get('/summary', getTransactionSummary);

// Fetch distinct categories
router.get('/categories', getCategories);

router.get('/:id', getTransactionById);

module.exports = router;