import {useState, useEffect} from 'react'
import User from "./components/User";
import UserAdd from "./components/UserAdd";


function Users() {

  // Currebt users
  const [users, setUsers] = useState([]);
 

  // Get all users
  useEffect(() => {
    fetch('/api/users', {method: "POST"})
    .then(response => response.json())
    .then(users => setUsers(users));
  }, []);


  // Add / Modify a user
  const addUser = (user) => {

    const userId = parseInt(user["user_id"])
    const userName = user["user_name"].toLowerCase()

    // Make sure that the name is not empty
    if (userName !== "") {

      const userJson = {"user_id": userId, "user_name": userName}

      // If user_id is 0 it is a new user that needs to be added
      if (user["user_id"] === "0") {

        fetch('/api/user', {
          method: "POST",
          headers: {"Content-type": "application/json"},
          body: JSON.stringify(userJson),
        })
        .then(response => response.json())
        .then(newUser => setUsers([...users, newUser]));

       // If user_id is NOT 0 it is a old user that needs to be modified
      } else {

        fetch('/api/user', {
          method: "PUT",
          headers: {"Content-type": "application/json"},
        body: JSON.stringify(userJson),
        })
        .then(response => response.json())
        .then(modUser => setUsers([...users.filter((user) => user.user_id !== modUser.user_id), userJson]));
      }
    }
  } 

  // Delete a user
  const delUser = (id) => {

    fetch('/api/user', {
        method: "DELETE",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(id),
      })
      .then(response => response.json())
      .then(user_id => setUsers(users.filter((user) => user.user_id !== user_id)));
  
    }

  return (
    <div>
      <ul>
      {users.map((user, index) => 
        <User key={index} user={user} onDelete={delUser} />
      )}
      </ul>
      <UserAdd onAdd={addUser} />
    </div>
  )
}

export default Users
