import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Col, Hidden, config } from 'react-awesome-styled-grid';

import Card from '../card/Card';
import Select from '../select/Select';

const CustomAside = styled.aside`
  width: 100%;
  margin-bottom: 1.5rem;
  background-color: #87888C;

  ${(props) => config(props).media['md']`
    min-height: calc(100vh - 3rem - 71px - 1.5rem);
  `}
`;

const Sidebar = ({ users }) => {
  return (
    <Col xs={4} md={2} lg={2}>
      <CustomAside>
        <Hidden xs sm>
          {users ? (users.map((user) => (
            <Card
              key={user.id}
              id={user.id}
              name={user.name}
              email={user.email}
              company={user.company.name}
            />
          ))) : false }
        </Hidden>
        <Hidden md lg xl>
          { users ? (
            <Select list={users} />
          ): false }
        </Hidden>
      </CustomAside>
    </Col>
  );
};

const mapStateToProps = (state) => ({
  users: state.users,
});

Sidebar.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      company: PropTypes.shape({
        name: PropTypes.string.isRequired,
        catchPhrase: PropTypes.string.isRequired,
        bs: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  ).isRequired,
};

export default connect(mapStateToProps)(Sidebar);
