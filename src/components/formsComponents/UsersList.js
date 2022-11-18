
import React from "react";
import './UsersList.css';
import NewFormItems from "./NewFormItems";



const UsersList = props =>{

    
    return (
      <div className="user">
        <ul>
          {props.users.map((user) => (
            <li key={user.id}>
              {user.name} ({user.Age} Year's Old)
            </li>
          ))}
        </ul>
      </div>
    );
}

export default UsersList;