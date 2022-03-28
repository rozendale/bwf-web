import React, {useEffect, useState} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { getGroups } from '../../services/group-services';


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
      await getGroups()
      .then( data => {
        setGroups(data);
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
          return <Link key={group.id} to={`/details/${group.id}`}>
              <p>{group.name}: {group.location}</p>
            </Link>
        }))}
    </div>
  );
}

export default GroupList;
