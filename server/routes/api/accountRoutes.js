const router = require('express').Router();
const {
  getAccounts,
  getSingleAccount,
  createAccount,
  deleteAccount,
  updateAccount,
} = require('../../controllers/accountController');

// /api/accounts
router.route('/')
.get(getAccounts)
.post(createAccount);

// /api/accounts/:accountId
router.route('/:_id')
.get(getSingleAccount)
.put(updateAccount)
.delete(deleteAccount);

module.exports = router;