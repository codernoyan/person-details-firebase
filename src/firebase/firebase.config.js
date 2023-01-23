/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB4kIrCZ-C_cZAGSNuc7cxLZ3dXPt_zOq8',
  authDomain: 'person-details-9e207.firebaseapp.com',
  projectId: 'person-details-9e207',
  storageBucket: 'person-details-9e207.appspot.com',
  messagingSenderId: '881700519144',
  appId: '1:881700519144:web:96a02367d8fad685cb1d5d',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export default app;
// const db = getDatabase(app);
const db = getFirestore(app);
export default db;
