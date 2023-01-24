/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
import React from 'react';

function UserCard({ user, handleGetSingleData }) {
  return (
    <button
      onClick={() => handleGetSingleData(user?.id)}
      type="button"
      className="block w-full"
    >
      <div className="bg-cardColor p-2 m-2">
        <div className="flex justify-between mb-2">
          <h3>{user?.data?.userId}</h3>
          <div>
            <h2>
              {user?.data?.date}
              {' '}
              {user?.data.time}
            </h2>
          </div>
        </div>
        <div>
          <h2>Person: detected</h2>
        </div>
      </div>
    </button>
  );
}

export default UserCard;
