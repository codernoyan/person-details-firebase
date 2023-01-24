/* eslint-disable linebreak-style */
// import { onValue, ref } from 'firebase/database';

import React from 'react';

function Home() {
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

  return (
    <div>
      <h2>
        this is home
      </h2>
    </div>
  );
}

export default Home;
