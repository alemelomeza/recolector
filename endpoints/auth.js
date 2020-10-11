const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.post('/', (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).send({ 'message': 'Bad Request'});
    }

    const token = jwt.sign({
        email,
    },
    'secret_key',
    {
        expiresIn: '7d'
    });

    res.status(200).send({ token });
});

module.exports = router;