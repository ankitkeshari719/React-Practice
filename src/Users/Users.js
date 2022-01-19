import React from 'react';
import User from "./User/User";

class Users extends React.Component  {
    render(){
        return (
            <div>
              <User name="User 1" />
              <User name="User 2" />
              <User name="User 3" />
            </div>
          );

    }
    
  }

export default Users;