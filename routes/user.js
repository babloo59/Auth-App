const expresss = require('express');
const router = expresss.Router();

const {login, signup} = require('../Controllers/Auth');
const {auth, isStudent, isAdmin} = require('../middlewares/auth');

router.post('/login', login);
router.post('/signup',signup);

// Testing Protected Routes for a single middleware
router.get('/test', auth, (req, res) => {
    res.json({
        success:true,
        message:'Welcome to the Protected route for TESTS',
    });
});

// peotected routes
router.get('/student', auth, isStudent, (req, res) => {
    res.json({
        success:true,
        message:'Welcome to the Protected route for Students',
    });
});

router.get('/admin', auth, isAdmin, (req, res) => {
    res.json({
        success:true,
        message:'Welcome to the Protected route for Admin',
    });
});

module.exports = router;