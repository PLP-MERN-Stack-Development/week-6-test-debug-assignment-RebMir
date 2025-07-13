const express = require('express');
const router = express.Router();
const {
    createBug,
    getBugs,
    updateBug,
    deleteBug,
} = require('../controllers/bugController');

router.get('/', getBugs);
router.post('/', createBug);
router.put('/:id', updateBug);
router.delete('/:id', deleteBug);

module.exports = router;