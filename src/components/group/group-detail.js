import React, {useEffect, useState} from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { useFetchGroup } from '../../hooks/fetch-group';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme'
import User from '../user/user';
import { joinGroup, leaveGroup } from '../../services/group-services';
import { useAuth } from '../../hooks/useAuth';
import Comments from '../comments/comments';
import EventList from '../events/event-list';


const useStyles = makeStyles( theme => ({
  memberContainer: {
    display: 'grid',
    gridTemplateColumns: '100px auto'
  }
}));

function GroupDetail() {
  const classes = useStyles();
  const { authData } = useAuth()
  const navigate = useNavigate();
  const { groupId } = useParams();
  const [ data, loading, error ] = useFetchGroup(groupId);
  const [group, setGroup] = useState(null);
  // const [ loading, setLoading] = useState(false);
  // const [ error, setError] = useState(false);
  const [ isGroup, setInGroup ] = useState(false);
  const [ isAdmin, setIsAdmin ] = useState(false);

  function handleClick() {
    navigate("/about");
  }

  //console.log(groupId)
  useEffect(() => {
    if(data?.members){
      console.log(data)
      if(authData?.user) {
        setInGroup(!!data.members.find( member => member.user.id === authData.user.id));
        setIsAdmin(data.members.find( member => member.user.id === authData.user.id)?.admin);
      }
    }
    setGroup(data)
  }, [data])

  const joinHere = () => {
    joinGroup({user: authData.user.id, group: group.id}).then(
      res => { console.log(res)}
    )
  }
  const leaveHere = () => {
    leaveGroup({user: authData.user.id, group: group.id}).then(
      res => { console.log(res)}
    )
  }
  const addEvent = () => {
    console.log(group)
    navigate("/event-form", group);
  }
  //console.log(group)
  if (error) return <h1>Error</h1>
  if (loading) return <h1>Loading...</h1>

  return group && (
    <ThemeProvider theme={theme}>
    <div>
      <Link  variant="secondary" to={'/'}>Back</Link>
      {/* <Typography variant="body3" component="h2">test</Typography> */}
      <Button variant="secondary" onClick={() => handleClick()}>test2-to-about</Button>
      { group &&
      <>
        <h1 key={group.id}>{group.name}: {group.location}</h1>
        <h2>{group.description}</h2>
        {/* <h3>{group.events.map((event) => (
          <h3>{event.id} = {event.team1} - {event.team2}</h3>
        ))}</h3> */}
        {isGroup ?
          <Button onClick={() => leaveHere()} variant="contained" color="primary">Leave Group</Button>
        :
          <Button onClick={() => joinHere()} variant="contained" color="primary">Join Group</Button>
        }
        {isAdmin &&
          <Button onClick={() => addEvent()} variant="contained" color="primary">Add event</Button>
        }
        {/* <h3>Events:</h3>
        { group.events.map ( event => {
          const format = "yyyy-MM-dd'T'hh:mm:ss'Z'"
          const evtTime = DateTime.fromFormat(event.time, format)
          return <div key={event.id}>
            <h3>{event.team1} vs. {event.team2}</h3>
            <p>
              <CalendarTodayIcon className={classes.dateTime}/>{evtTime.toSQLDate()}
              <AlarmIcon className={classes.dateTime}/>{evtTime.toFormat('HH:mm')}
            </p>
          </div> */}
        <EventList events={group.events}/>

        <br/>
        <h3>Members:</h3>
        {console.log(group)}
          { group.members.map ( member => {
            return <div key={member.id} className={classes.memberContainer}>
              {/* <p>{member.user.username}</p> */}
              <User user={member.user}/>
              <p>{member.points}pts</p>
            </div>
          })}
        <Comments group={group} />
      </>
      }
    </div>
    </ThemeProvider>
  );
}

export default GroupDetail;
