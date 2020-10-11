const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.use((req, res, next) => {
    const token = req.headers['x-access-token'];

    if (!token) {
        return res.status(401).send({ 'message': 'Unauthorized'});
    }

    jwt.verify(token, 'secret_key', (err, decoded) => {
        if (err) {
          return next(err);
        }

        req.decoded = decoded;
        return next();
    });
});

router.post('/', (req, res) => {
    res.status(200).send({ 'message': 'OK' });
});

module.exports = router;