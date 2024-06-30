// backend/routes/api.js
const  router = require('express').Router()
const { db } = require('../config/firebaseAdmin');
const checkAuth = require('../middleware/auth'); // Import auth middleware
const  register  = require('../controller/users/register');
const  userProfile  = require('../controller/users/userProfile');
const addAdmin = require('../controller/admin/addAdmin');
const admins = require('../controller/admin/admins');

// Example route to get data

router.route('/').get((req,res)=>{
    res.send('Helloo Muzayen Adem')
})
router.route('/userdata').get(userProfile)
router.route('/admins').get(admins)
// Example route to add data
router.route('/register').post(register)
//add admin 
router.route('/addadmin').post(addAdmin)
module.exports = router;
