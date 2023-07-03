import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER } from './api/queries/userQueries';

const App: React.FC = () => {
  const { loading, error, data } = useQuery(GET_USER); // useQuery is the hook to fecth the data

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const user = data.user;

  return (
    <div>
      <h1>User Details</h1>
      <p>ID: {user.id}</p>
      <p>Name: {user.name}</p>
    </div>
  );
};

export default App;
