const {db} = require('../../config/firebaseAdmin')

const addAdmin = async(req,res)=>{
    try {
        const data = req.body
        const admin =  await db.collection('admin').add(data)
        res.status(200).json({ message: 'Admin added successfully', id: admin.id });
        console.log(admin)
    } catch (error) {
        res.status(500).json({error:error.message})
        console.log(error.message)
    }
}

module.exports = addAdmin