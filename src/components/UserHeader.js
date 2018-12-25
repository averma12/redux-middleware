import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

class UserHeader extends Component {
  componentDidMount() {
    console.log(this.props.userId);
    this.props.fetchUser(this.props.userId);
  }
  render() {
    return <div>New shit bro</div>;
  }
}

export default connect(
  null,
  { fetchUser }
)(UserHeader);
