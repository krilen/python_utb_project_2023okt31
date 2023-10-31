import {useState} from 'react'

const UserAdd = ({onAdd}) => {

  const [user_name, setUserName] = useState("");
  const [user_id, setUserId] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault()

    // Add the data
    onAdd({user_name, user_id})

    // Reset the form to is default values
    setUserName("")
    document.querySelector("#user_name").value = "";

    setUserId(0)
    document.querySelector("#user_id").value = 0;
  }

  const handleChange = (e) => {
    setUserName(e.target.value)
    setUserId(document.querySelector("#user_id").value)
  }

  const resetUserAdd = () => {
    const modUserName = document.querySelector("#user_name");
    modUserName.value = "";

    const modUserId = document.querySelector("#user_id");
    modUserId.value = 0;  
  }


  return (
    <form onSubmit={onSubmit}>
        <div>Name:&nbsp;<input type="text" id="user_name" placeholder="Name" value={user_name} onChange={handleChange} /></div>
        <div><input type="hidden" id="user_id" defaultValue={user_id}/></div>
        <div><input type="button" defaultValue="Reset" onClick={resetUserAdd}/>&nbsp;<input type="Submit" defaultValue="Save"/></div>
    </form>
      
    
  )
}

export default UserAdd
