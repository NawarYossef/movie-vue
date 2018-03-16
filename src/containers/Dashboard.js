import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ComplimentList from '../components/ComplimentList';
import UserList from '../components/UserList';
import AppNav from '../components/AppNav';
import './styles/Dashboard.css';

const Dashboard = props => {
  return (
    <section className="sending">
      <AppNav />
      <div className="sending-grid">
        <ComplimentList compliments={props.compliments} />
        <UserList users={props.users} />
      </div>
      <Footer />
    </section>
  );
};

Dashboard.propTypes = {
  compliments: PropTypes.arrayOf(PropTypes.string).isRequired,
  users: PropTypes.arrayOf(PropTypes.string).isRequired
};

const mapStateToProps = state => ({
  compliments: state.complimentsReducer.compliments,
  users: state.usersReducer.users
});

export default connect(mapStateToProps)(Dashboard);
