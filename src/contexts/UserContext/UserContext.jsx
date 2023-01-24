/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import {
  collection, doc, getDoc, getDocs,
} from 'firebase/firestore';
import React, { createContext, useEffect, useState } from 'react';
import db from '../../firebase/firebase.config';
// user context

export const UserProvider = createContext();

export const loadUserData = (id) => {
  const userDoc = doc(db, 'users', id);
  getDoc(userDoc)
    .then((res) => {
      console.log(res.data());
    })
    .catch((err) => {
      console.log(err);
    });
};

export default function UserContext({ children }) {
  const [users, setUsers] = useState([]);
  console.log(users);

  useEffect(() => {
    const usersCollection = collection(db, 'users');
    getDocs(usersCollection)
      .then((res) => {
        const userDetails = res.docs.map((user) => ({
          data: user?.data(),
          id: user?.id,
        }));
        // console.log(userDetails);
        setUsers(userDetails);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // export const loadUserData = (id) => {
  //   const userDoc = doc(db, 'users', id);
  //   getDoc(userDoc)
  //     .then((res) => {
  //       console.log(res.data());
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const userInfo = {
    doc,
    getDoc,
    db,
    users,
    loadUserData,
  };
  return (
    <UserProvider.Provider value={userInfo}>{children}</UserProvider.Provider>
  );
}
