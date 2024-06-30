// backend/middleware/auth.js
const { admin } = require('../config/firebaseAdmin');

const checkAuth = async (req, res, next) => {
  const token = req.headers.authorization?.split('Bearer ')[1];

  if (!token) {
    return res.status(403).json({ message: 'Unauthorized' });
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken;
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Unauthorized', error });
  }
};

module.exports = checkAuth;
