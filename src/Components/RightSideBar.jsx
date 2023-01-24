/* eslint-disable linebreak-style */
/* eslint-disable react/react-in-jsx-scope */
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserProvider } from '../contexts/UserContext/UserContext';
import UserCard from './UserCard';

function RightSideBar() {
  const navigate = useNavigate();
  const {
    users,
  } = useContext(UserProvider);

  const handleGetSingleData = (id) => {
    console.log(id);
    navigate(`/user-details/${id}`);
  };

  return (
    <div className="bg-gray-300 w-80 p-2 bg-rightSideColor overflow-y-scroll">
      <div className="bg-white p-1">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-semibold text-xl">Events</h2>
          </div>
          <button type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
              />
            </svg>
          </button>
        </div>
        {/* user details cards here */}
        <div>
          {users?.map((user) => (
            <UserCard
              key={user?.id}
              user={user}
              handleGetSingleData={handleGetSingleData}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default RightSideBar;
