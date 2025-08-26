const Transaction = require('../models/TxnSchema');

// Add a transaction
exports.addTransaction = async (req, res) => {
  try {
    const { title, amount, type, category, date } = req.body;
    const userId = req.user._id;

    // Validate input
    if (!title || !amount || !type || !category) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Create transaction
    const transaction = await Transaction.create({
      userId,
      title,
      amount,
      type,
      category,
      date: date || new Date(),
    });

    res.status(201).json({
      success: true,
      message: 'Transaction added successfully',
      data: transaction,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all transactions (with filtering)
exports.getTransactions = async (req, res) => {
  try {
    const userId = req.user._id;

    // Extract query parameters
    const { startDate, endDate, category } = req.query;

    // Build query object
    const query = { userId }; // Only fetch transactions for the logged-in user

    // Add date range filter if provided
    if (startDate && endDate) {
      query.date = {
        $gte: new Date(startDate), // Greater than or equal to startDate
        $lte: new Date(endDate),   // Less than or equal to endDate
      };
    }

    // Add category filter if provided
    if (category) {
      query.category = category;
    }

    // Fetch transactions based on the query
    const transactions = await Transaction.find(query);

    res.status(200).json({
      success: true,
      message: 'Transactions fetched successfully',
      data: transactions,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update a transaction
exports.updateTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, amount, type, category, date } = req.body;
    const userId = req.user._id;

    // Find transaction
    const transaction = await Transaction.findOne({ _id: id, userId });
    if (!transaction) {
      return res.status(404).json({ message: 'Transaction not found' });
    }

    // Update transaction
    transaction.title = title || transaction.title;
    transaction.amount = amount || transaction.amount;
    transaction.type = type || transaction.type;
    transaction.category = category || transaction.category;
    transaction.date = date || transaction.date;

    await transaction.save();

    res.status(200).json({
      success: true,
      message: 'Transaction updated successfully',
      data: transaction,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete a transaction
exports.deleteTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user._id;

    // Find and delete transaction
    const transaction = await Transaction.findOneAndDelete({ _id: id, userId });
    if (!transaction) {
      return res.status(404).json({ message: 'Transaction not found' });
    }

    res.status(200).json({
      success: true,
      message: 'Transaction deleted successfully',
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get transaction summary
exports.getTransactionSummary = async (req, res) => {
  try {
    const userId = req.user._id;
    console.log('User ID:', userId);

    // Aggregate transactions to calculate income, expense, and categories
    const summary = await Transaction.aggregate([
      { $match: { userId: userId } }, // Only fetch transactions for the logged-in user
      {
        $group: {
          _id: null,
          income: {
            $sum: { $cond: [{ $eq: ['$type', 'income'] }, '$amount', 0] },
          },
          expense: {
            $sum: { $cond: [{ $eq: ['$type', 'expense'] }, '$amount', 0] },
          },
          categories: {
            $push: {
              category: '$category',
              amount: '$amount',
            },
          },
        },
      },
    ]);

    // Extract and format the summary
    const result = summary[0] || {};
    const categories = result.categories?.reduce((acc, curr) => {
      acc[curr.category] = (acc[curr.category] || 0) + curr.amount;
      return acc;
    }, {});

    res.status(200).json({
      success: true,
      message: 'Transaction summary fetched successfully',
      data: {
        income: result.income || 0,
        expense: result.expense || 0,
        categories: categories || {},
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get distinct categories for the user
exports.getCategories = async (req, res) => {
  try {
    const userId = req.user._id;
    const categories = await Transaction.distinct('category', { userId });

    res.status(200).json(categories);
  } catch (error) {
    console.error('Failed to fetch categories:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getTransactionById = async (req, res) => {
  try {
    const userId = req.user._id;
    const { id } = req.params;

    const transaction = await Transaction.findOne({ _id: id, userId });
    if (!transaction) {
      return res.status(404).json({ success: false, message: "Transaction not found" });
    }

    res.status(200).json({ success: true, data: transaction });
  } catch (error) {
    console.error("Error fetching transaction:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
