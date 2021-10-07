import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  height: 100vh;
`;

export const Titulo = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-size: 48px;
  letter-spacing: -2px;
  color: #0d243c;
  width: 450px;
  padding-bottom: 24px;
`;

export const LeftModule = styled.div`
  min-width: 650px;
  display: flex;
  flex-direction: column;
  padding: 26px;
`;

export const RightModule = styled.div`
  display: flex;
  background: #706dfd;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
`;

export const Logo = styled.img``;

export const Main = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  div {
    button {
      width: 250px;
      background: #706dfd;
      color: #fff;
      font-size: 1.6rem;
      padding: 0.25em 1em;
      border: 1.3px solid #706dfd;
      border-radius: 5px;
      cursor: pointer;
    }
    button:hover {
      background: #fff;
      color: #000;
      transition: 0.5s;
    }
  }
`;
