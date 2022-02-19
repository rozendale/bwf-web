import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@material-ui/core';

function GroupList() {

  const [ groups, setGroups] = useState(null);
  const [ loading, setLoading] = useState(false);
  const [ error, setError] = useState(false);
  const navigate = useNavigate();
  function handleClick() {
    navigate("/about");
  }


  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      await fetch('http://127.0.0.1:8000/api/groups/')
      .then(resp => resp.json())
      .then( groups => {
        setGroups(groups);
        setLoading(false);
      }).catch( e => {
        setError(true);
        setLoading(false);
      })
    }
    getData();
  }, [])

  if (error) return <h1>Error</h1>
  if (loading) return <h1>Loading...</h1>

  return (
    <div>
      <Button onClick={() => handleClick()}>test-to-about</Button>
        { groups && groups.map((group => {
          return <p key={group.id}>{group.name}: {group.location}</p>
        }))}
    </div>
  );
}

export default GroupList;
