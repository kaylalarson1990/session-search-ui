import React, {useState, useEffect} from 'react';
import SearchFields from './SearchFields';
import './searchfields.css';

function App() {
  const [sessions, setSessions] = useState(false);
  useEffect(() => {
    getSession();
  }, []);
  function getSession() {
    fetch('http://localhost:3001')
      .then(response => {
        return response.text();
      })
      .then(data => {
        setSessions(data);
      });
  }
  function createSession() {
    let user_first_name = prompt('Enter session name');
    let user_email = prompt('Enter session email');
    fetch('http://localhost:3001/sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({user_first_name, user_email}),
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
        getSession();
      });
  }
  function deleteSession() {
    let id = prompt('Enter session id');
    fetch(`http://localhost:3001/sessions/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
        getSession();
      });
  }
  return (
    <div>
      <SearchFields />
      {/* {sessions ? sessions : 'There is no session data available'}
      <br />
      <button onClick={createSession}>Add session</button>
      <br />
      <button onClick={deleteSession}>Delete session</button> */}
    </div>
  );
}
export default App;
