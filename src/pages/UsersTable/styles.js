import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 15px 15px 15px;

  .table thead th {
    vertical-align: middle;
  }

  .react-bootstrap-table table thead tr th .filter-label {
    display: inline-block !important;
    margin-left: 15px;
  }

  .divSearch {
    label {
      width: 100%;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90px;
  width: 100%;
  margin-bottom: 25px;
  background-color: #000;
  border-end-start-radius: 10px;
  border-end-end-radius: 10px;
`;

export const Logo = styled.img`
  width: 200px;
  height: 80px;
  cursor: pointer;
`;
