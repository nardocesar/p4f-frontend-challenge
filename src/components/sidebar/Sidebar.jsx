import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Col } from 'react-awesome-styled-grid';

import Card from '../card/Card';

const CustomAside = styled.aside`
  width: 100%; min-height: calc(100vh - 3rem - 71px);
  background-color: #87888C;
`;

const Sidebar = ({ users }) => (
  <Col xs={4} md={2} lg={2}>
    <CustomAside>
      {users.map((user) => (
        <Card
          key={user.id}
          id={user.id}
          name={user.name}
          email={user.email}
          company={user.company.name}
        />
      ))}
    </CustomAside>
  </Col>
);

const mapStateToProps = (state) => ({
  users: state,
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
