const jwt = require('jsonwebtoken');

const auth = (roles = []) => {
    return (req, res, next) => {
        const userRole = req.headers['role'];

        if (!userRole) {
            return res.status(401).json({ message: 'Identity Verification Required' });
        }

        if (roles.length && !roles.includes(userRole)) {
            return res.status(403).json({ message: 'Access Denied: Insufficient Rank' });
        }

        next();
    };
};

module.exports = auth;