/* eslint-disable linebreak-style */
import React from 'react';
import { useLoaderData } from 'react-router-dom';

export default function UserDetails() {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold text-center">{data?.name.startsWith('Male') ? 'Male' : 'Female'}</h2>
      </div>
      <div className="flex justify-between items-start p-2 mt-8">
        <div>
          <div className="mb-4">
            <h2 className="text-2xl font-bold">{data?.userId}</h2>
            <h2 className="text-2xl font-bold">Person Detected</h2>
          </div>
          <div className="mb-4">
            <p className="font-medium text-xl">
              Name:
              {' '}
              {data?.name}
            </p>
            <p className="font-medium text-xl">
              Location:
              {' '}
              {data?.location}
            </p>
            <p className="font-medium text-xl">
              Date:
              {' '}
              {data?.date}
            </p>
            <p className="font-medium text-xl">
              Time:
              {' '}
              {data?.time}
            </p>
          </div>
          <div className="font-medium text-xl">
            <p>Description:</p>
            <p>
              {data?.name}
              {' '}
              detected at
              {' '}
              <br />
              {' '}
              {data?.location}
              {' '}
              on
              {' '}
              {data?.date}
            </p>
          </div>
        </div>
        <div>
          <img
            src={data?.image}
            alt="person"
            className="w-[400px] h-[600px] object-cover"
          />
        </div>
      </div>
    </div>
  );
}
