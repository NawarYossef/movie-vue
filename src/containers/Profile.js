import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UserImage from "../components/UserImage";
import UserInfo from "../components/UserInfo";
import AppNav from "../components/AppNav";
import EditButton from "../components/EditButton";
import "./styles/profile.css";

class Profile extends Component {
  render() {
    return (
      <section className="profile">
        <AppNav />
        <UserImage />
        <UserInfo />
        <EditButton />
      </section>
    );
  }
}

export default connect()(Profile);
