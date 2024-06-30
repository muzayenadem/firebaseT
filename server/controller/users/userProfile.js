const {db} = require('../../config/firebaseAdmin')


// Example route to get data
const userProfile =  async (req, res) => {
  try {
    const snapshot = await db.collection('users').get();
    let data = [];
    snapshot.forEach(doc => {
      data.push({ id: doc.id, ...doc.data() });
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error getting data', error });
  }
};

  module.exports = userProfile
