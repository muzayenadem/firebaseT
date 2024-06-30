const {db} = require('../../config/firebaseAdmin')

const admins = async (req,res) =>{
    try {
        const data = await db.collection('admin').get()
        let list = []
        data.forEach(single =>{
        list.push({id:single.id, ...single.data()})
        })
        res.status(200).send(list)
        console.log(list)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

module.exports = admins