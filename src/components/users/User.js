import React, { Component } from "react";

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }
  render() {
    const {
      name,
      avatar,
      url,
      location,
      bio,
      blog,
      website,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
    } = this.props.user;
    return <div>User</div>;
  }
}

export default User;
