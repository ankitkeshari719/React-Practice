import React from 'react';

class User extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

export default User;