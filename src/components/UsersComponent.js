// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../redux/actions/users';
import Card from './CardComponent';

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <>
      {loading && <p>Loading...</p>}
      {!loading && error && <p>{error}</p>}
      {!loading && users.length === 0 && <p>No users available!</p>}
      {users.length > 0 &&
        users.map((user) => {
          const users = user;
          console.log(users.location.state);

          return (
            <Card key={`${user.name.first}${user.name.last}`} user={user} />
          );
        })}
    </>
  );
};

export default Users;
