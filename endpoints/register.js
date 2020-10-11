const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).send({ 'message': 'Bad Request'})
    }

    res.status(200).send({ 'message': 'success' });
});

module.exports = router;