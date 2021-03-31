import { useEffect, useState } from 'react';
import './App.css';

const FetchGitUser = () => {
  const [users,setUser] = useState([]);

  const apiUrl = `https://api.github.com/users`;

  const fetchedGitData = async () => {
    const response = await fetch(apiUrl);
    const users = await response.json();
    setUser(users)
  }
  useEffect(()=>{
    fetchedGitData();
  },[])
  return (
    <>{users.map((user)=>{
      return (
        <>
       
                  <li key={user.id}>
                    <div class="user-main">
                    <div className="user-profile">
                      <figure>
                        <img src={user.avatar_url}/>
                      </figure>
                    </div>
                    <div className="user-details">
                      <h4>{user.login}</h4>
                      <a href={user.html_url} target="_blank">Profile</a>
                    </div>
                    </div>
        </li>
        </>
      )
    })}</>
  )
}
const App = () => {
  return (
    <>
    <h2 className="h2">Git Users</h2>
    <div className="user-box">  
        <ul className="user-container">
    <FetchGitUser />
    </ul>
    </div>

    </>
  )
}

export default App;
