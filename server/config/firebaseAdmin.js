// backend/firebaseAdmin.js
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json'); // replace with the path to your service account JSON file

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com" // replace with your database URL
});

const db = admin.firestore();
module.exports = { admin, db };
