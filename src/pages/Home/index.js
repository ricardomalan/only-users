// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Container,
  Header,
  Main,
  RightModule,
  LeftModule,
  Titulo,
  Logo,
} from './styles';
import logo from '../../assets/images/only_users.png';
import image from '../../assets/images/undraw_people.svg';

const Home = () => {
  const history = useHistory();

  function list() {
    history.push('/user-list');
  }

  return (
    <Container>
      <LeftModule>
        <Header>
          <Logo src={logo} alt="logoBrand" width="350px" height="350px" />
        </Header>
        <Main>
          <Titulo>
            Aplicação para listar usuários e algumas de suas informações.
          </Titulo>
          <div>
            <button onClick={list}>Listar usuários</button>
          </div>
        </Main>
      </LeftModule>
      <RightModule>
        <Logo src={image} alt="img" width="80%" height="80%" />
      </RightModule>
    </Container>
  );
};

export default Home;
