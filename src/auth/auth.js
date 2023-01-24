/* eslint-disable linebreak-style */
import { doc, getDoc } from 'firebase/firestore';
import db from '../firebase/firebase.config';

const loadUserData = async (id) => {
  const userDoc = doc(db, 'users', id);
  // getDoc(userDoc)
  //   .then((res) => {
  //     console.log(res.data());
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  const res = await getDoc(userDoc);
  const data = await res.data();
  return data;
};

export default loadUserData;
