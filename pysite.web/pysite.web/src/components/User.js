const User = ({user, onDelete}) => {

  const modUser = (user_name, user_id) => {

    const modUserName = document.querySelector("#user_name");
    modUserName.value = user_name;

    const modUserId = document.querySelector("#user_id");
    modUserId.value = user_id;
  }

  return (
    <li>{user.user_name}&nbsp;<button type="button" onClick={() => onDelete(user.user_id)}>delete</button>&nbsp;<button type="button" onClick={() => modUser(user.user_name, user.user_id)}>modify</button></li>
  )
}

export default User
