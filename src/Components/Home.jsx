/* eslint-disable linebreak-style */
// import { onValue, ref } from 'firebase/database';
import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import db from '../firebase/firebase.config';

function Home() {
  const [users, setUsers] = useState([]);
  console.log(users);
  // const userCollectionRef = collection(db, 'users');

  // useEffect(() => {
  //   const query = ref(db, '/users');
  //   console.log(query);
  //   return onValue(query, (snapshot) => {
  //     const data = snapshot.val();
  //     if (snapshot.exists()) {
  //       Object.values(data).map((user) => setUsers((previousUsers) => [...previousUsers, user]));
  //     }
  //   });
  // }, []);

  useEffect(() => {
    const usersCollection = collection(db, 'users');
    getDocs(usersCollection)
      .then((res) => {
        const userDetails = res.docs.map((user) => ({ data: user?.data(), id: user?.id }));
        // console.log(userDetails);
        setUsers(userDetails);
      }).catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <h2>
        this is home
        {' '}
        {users.length}
      </h2>
    </div>
  );
}

export default Home;
