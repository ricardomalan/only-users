// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Container, Header, Logo } from './styles';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { clearUsers } from '../../redux/actions/users';
import Users from '../../components/UsersComponent';
import logo from '../../assets/images/only_users_header.png';

function UsersTable() {
  const history = useHistory();
  const dispatch = useDispatch();

  function home() {
    dispatch(clearUsers());
    history.push('/');
  }

  return (
    <Container>
      <Header>
        <Logo src={logo} alt="logo" onClick={home} />
      </Header>
      <Users />
    </Container>
  );
}

export default UsersTable;
