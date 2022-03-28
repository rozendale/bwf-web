import React, {useEffect, useState} from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { useFetchGroup } from '../../hooks/fetch-group';
import {DateTime} from 'luxon';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AlarmIcon from '@mui/icons-material/Alarm';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
//import { ClassNames } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme'


const useStyles = makeStyles( theme => ({
  dateTime: {
    fontSize: '18px',
    marginRight: '3px',
    marginTop: '10px',
    // color: theme.colors.mainAccentColor
    color: 'gold',
  }
}));

function GroupDetail() {
  const classes = useStyles();
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

  //console.log(groupId)
  useEffect(() => {
    setGroup(data)
  }, [data])
  //console.log(group)
  if (error) return <h1>Error</h1>
  if (loading) return <h1>Loading...</h1>

  return group && (
    <ThemeProvider theme={theme}>
    <div>
      <Link  variant="secondary" to={'/'}>Back</Link>
      <Typography variant="body3" component="h2">test</Typography>
      <Button variant="secondary" onClick={() => handleClick()}>test2-to-about</Button>
      { group &&
      <>
        <h1 key={group.id}>{group.name}: {group.location}</h1>
        <h2>{group.description}</h2>
        {/* <h3>{group.events.map((event) => (
          <h3>{event.id} = {event.team1} - {event.team2}</h3>
        ))}</h3> */}
        <h3>Events:</h3>
        { group.events.map ( event => {
          const format = "yyyy-MM-dd'T'hh:mm:ss'Z'"
          const evtTime = DateTime.fromFormat(event.time, format)
          return <div key={event.id}>
            <h3>{event.team1} vs. {event.team2}</h3>
            <p>
              <CalendarTodayIcon className={classes.dateTime}/>{evtTime.toSQLDate()}
              <AlarmIcon className={classes.dateTime}/>{evtTime.toFormat('HH:mm')}
            </p>
          </div>
        })}
      </>
      }
    </div>
    </ThemeProvider>
  );
}

export default GroupDetail;
