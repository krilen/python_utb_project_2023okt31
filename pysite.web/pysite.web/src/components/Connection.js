import {useState, useEffect} from 'react'

const Connection = () => {

  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch('/api/items', {method: "POST"})  // Automatically against "proxy" var in package.json
    /*.then(response => response.json())*/
    .then(response => {
      console.log(response);
      return response.json();
    })
    /*.then(data => setData(data)) */
    .then(data => {
      console.log(data);
      setData(data);
    })
  }, []);


  return (
    <div>
      <p>{data && data.user_name}</p>
      <p>{data && data.age}</p>
      <p>{data && data.home}</p>
      <p>{data && data.info}</p>
    </div>
  )
}

export default Connection
