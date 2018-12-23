import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts1();
  }
  render() {
    return <div>PostShit</div>;
  }
}
export default connect(
  null,
  { fetchPosts1: fetchPosts }
)(PostList);
