import firebase from 'firebase';
require('dotenv').config();

// const config = {
//   apiKey: process.env.FB_API_KEY,
//   authDomain: process.env.FB_AUTH_DOMAIN,
//   databaseURL: process.env.FB_DATABASE_URL,
//   projectId: process.env.FB_PROJECT_ID,
//   storageBucket: process.env.FB_STORAGE_BUCKET,
//   messagingSenderId: process.env.FB_MESSAGING_SENDER_ID
// };

const config = {
  apiKey: "AIzaSyA3DPd5tgDcZl5QXg7pT3WqaNKBbqLD_UQ",
  authDomain: "late-file.firebaseapp.com",
  databaseURL: "https://late-file.firebaseio.com",
  projectId: "late-file",
  storageBucket: "late-file.appspot.com",
  messagingSenderId: "883382384663"
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;
