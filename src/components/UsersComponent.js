// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import filterFactory, { selectFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';

import { getUsers } from '../redux/actions/users';

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);

  const Logo = styled.img``;

  function formatImg(cell) {
    return <Logo src={cell} alt="imgAvatar" />;
  }

  function formatName(cell) {
    const first = cell[0].toUpperCase() + cell.substr(1);
    return <span>{first}</span>;
  }

  const selectOptionsGender = {
    female: 'Female',
    male: 'Male',
  };

  const selectOptionsState = {
    acre: 'Acre',
    alagoas: 'Alagoas',
    amapá: 'Amapá',
    amazonas: 'Amazonas',
    bahia: 'Bahia',
    ceará: 'Ceará',
    'distrito federal': 'Distrito Federal',
    'espírito santo': 'Espírito Santo',
    goiás: 'Goiás',
    maranhão: 'Maranhão',
    'mato grosso': 'Mato Grosso',
    'mato grosso do sul': 'Mato Grosso do Sul',
    'minas gerais': 'Minas Gerais',
    pará: 'Pará',
    paraíba: 'Paraíba',
    paraná: 'Paraná',
    pernambuco: 'Pernambuco',
    piauí: 'Piauí',
    'rio de janeiro': 'Rio de Janeiro',
    'rio grande do norte': 'Rio Grande do Norte',
    'rio grande do sul': 'Rio Grande do Sul',
    roraima: 'Roraima',
    'santa catarina': 'Santa Catarina',
    'são paulo': 'São Paulo',
    sergipe: 'Sergipe',
    tocantins: 'Tocantins',
  };

  const columns = [
    {
      dataField: 'picture.thumbnail',
      text: 'Photo',
      formatter: formatImg,
      searchable: false,
    },
    {
      dataField: 'name.first',
      text: 'Name',
      formatter: formatName,
    },
    {
      dataField: 'gender',
      text: 'Gender',
      formatter: (cell) => selectOptionsGender[cell],
      filter: selectFilter({
        options: selectOptionsGender,
      }),
      searchable: false,
    },
    {
      dataField: 'location.state',
      text: 'Living state',
      formatter: (cell) => selectOptionsState[cell],
      filter: selectFilter({
        options: selectOptionsState,
      }),
      searchable: false,
    },
  ];

  const { SearchBar } = Search;

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <>
      {loading && <p>Loading...</p>}
      {!loading && error && <p>{error}</p>}
      {!loading && users.length === 0 && <p>No users available!</p>}
      {users.length > 0 && (
        <ToolkitProvider keyField="id" data={users} columns={columns} search>
          {(props) => (
            <div>
              <div className="divSearch">
                <h3>Enter the name of the user you want to find:</h3>
                <SearchBar {...props.searchProps} />
              </div>
              <hr />
              <BootstrapTable
                {...props.baseProps}
                filter={filterFactory()}
                pagination={paginationFactory()}
              />
            </div>
          )}
        </ToolkitProvider>
      )}
    </>
  );
};

export default Users;
