import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
import UserHeader from "./UserHeader";

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts1();
  }

  renderList = () => {
    return this.props.posts.map(post => {
      //console.log(post.id);
      return (
        <div className="item" key={post.id}>
          <i className="large middle icon aligned user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      );
    });
  };
  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}
const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};
export default connect(
  mapStateToProps,
  { fetchPosts1: fetchPosts }
)(PostList);
