import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

class UserHeader extends Component {
  componentDidMount() {
    console.log(this.props.userId);
    this.props.fetchUser(this.props.userId);
  }
  render() {
    const { users } = this.props;
    if (!users) {
      return null;
    }

    return <div className="header">{users.name}</div>;
  }
}
const mapStateToProps = (state, ownProps) => {
  return { users: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(
  mapStateToProps,
  { fetchUser }
)(UserHeader);
