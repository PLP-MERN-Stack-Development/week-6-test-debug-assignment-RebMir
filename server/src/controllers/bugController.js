const Bug = require('../models/Bug');

// Create bug
exports.createBug = async (req, res) => {
    try {
        const bug = new Bug(req.body);
        await bug.save();
        res.status(201).json(bug);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get all bugs
exports.getBugs = async (req, res) => {
    try {
        const bugs = await Bug.find().sort({ createdAt: -1 });
        res.json(bugs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update bug
exports.updateBug = async (req, res) => {
    try {
        const updated = await Bug.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete bug
exports.deleteBug = async (req, res) => {
    try {
        await Bug.findByIdAndDelete(req.params.id);
        res.json({ message: 'Bug deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};