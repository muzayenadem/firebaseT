const {db} = require('../../config/firebaseAdmin')
 
const register =  async (req, res) => {
    try {
      const newData = req.body;
      const docRef = await db.collection('users').add(newData);
      res.status(200).json({ message: 'Data added successfully', id: docRef.id });
      console.log(docRef)
    } catch (error) {
      res.status(500).json({ message: 'Error adding data', error });
      console.log(error.message)
    }
  };
  
  module.exports = register