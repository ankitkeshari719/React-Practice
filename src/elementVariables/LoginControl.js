import React from "react";

import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";
import Greeting from "../conditional/Greeting";

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    // this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      // button = <LogoutButton onClick={this.handleLogoutClick} />;
      button = <LogoutButton onClick={(e) => this.handleLogoutClick()} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
        <h3>The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.</h3>
      </div>
    );
  }
}

export default LoginControl;
