import React, {useEffect, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@material-ui/core';

function GroupDetail() {

  const [ group, setGroup] = useState(null);
  const [ loading, setLoading] = useState(false);
  const [ error, setError] = useState(false);
  const navigate = useNavigate();
  const { groupId } = useParams();

  function handleClick() {
    navigate("/about");
  }


  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      await fetch(`http://127.0.0.1:8000/api/groups/${groupId}/`)
      .then(resp => resp.json())
      .then( group => {
        setGroup(group);
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
      <Button onClick={() => handleClick()}>test2-to-about</Button>
      <h3 key={group.id}>{group.name}: {group.location}</h3>
    </div>
  );
}

export default GroupDetail;
