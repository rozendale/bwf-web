import React, {useEffect, useState} from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { getGroup } from '../services/group-services';

function GroupDetail() {

  const { groupId } = useParams();
  const [ group, setGroup] = useState(null);
  const [ loading, setLoading] = useState(false);
  const [ error, setError] = useState(false);
  const navigate = useNavigate();

  function handleClick() {
    navigate("/about");
  }

  console.log(groupId)
  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      await getGroup(groupId).then( data => {
        setLoading(false);
        setGroup(data);
      })
    }
    getData();
  }, [])
  console.log(group)
  if (error) return <h1>Error</h1>
  if (loading) return <h1>Loading...</h1>

  return group && (
    <div>
      <Link to={'/'}>Back</Link>
      <Button onClick={() => handleClick()}>test2-to-about</Button>
      <h3 key={group.id}>{group.name}: {group.location}</h3>
    </div>
  );
}

export default GroupDetail;
