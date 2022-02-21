import React, {useEffect, useState} from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { useFetchGroup } from '../hooks/fetch-group';


function GroupDetail() {

  const { groupId } = useParams();
  const [ data, loading, error ] = useFetchGroup(groupId);
  const [group, setGroup] = useState(null);
  // const [ group, setGroup] = useState(null);
  // const [ loading, setLoading] = useState(false);
  // const [ error, setError] = useState(false);
  const navigate = useNavigate();

  function handleClick() {
    navigate("/about");
  }

  console.log(groupId)
  useEffect(() => {
    setGroup(data)
  }, [data])
  console.log(group)
  if (error) return <h1>Error</h1>
  if (loading) return <h1>Loading...</h1>

  return group && (
    <div>
      <Link to={'/'}>Back</Link>
      <Button onClick={() => handleClick()}>test2-to-about</Button>
      { group &&
      <>
        <h1 key={group.id}>{group.name}: {group.location}</h1>
        <h2>{group.description}</h2>
        <h3>{group.events.map((item) => (
          <h3>{item.id} = {item.team1} - {item.team2}</h3>
        ))}</h3>
      </>
      }
    </div>
  );
}

export default GroupDetail;
