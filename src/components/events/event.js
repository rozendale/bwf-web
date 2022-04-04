import React, {useEffect, useState} from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useParams } from 'react-router-dom';
import {DateTime} from 'luxon';
import { makeStyles } from '@material-ui/core/styles';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AlarmIcon from '@mui/icons-material/Alarm';
import {useFetchEvent} from '../../hooks/fetch-event';
import User from '../user/user';
import { TextField, Button } from '@material-ui/core';
import { placeBet } from '../../services/event-services';


const useStyles = makeStyles( theme => ({
    dateTime: {
      fontSize: '18px',
      marginRight: '3px',
      marginTop: '10px',
      // color: theme.colors.mainAccentColor
      color: 'gold',
    },
    bets: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr',
      margin: '5px 0 0'
    }
  }));


export default function Event(){
    const { authData } = useAuth();
    const { id } = useParams();
    //const { groupId } = useParams();
    const classes = useStyles();
    const [ data, loading, error ] = useFetchEvent(authData.token, id);
    const [event, setEvent] = useState(null);
    const [ evtTime, setEvtTime] = useState(null);
    const [ score1, setScore1] = useState(null);
    const [ score2, setScore2] = useState(null);

    useEffect(() => {
      setEvent(data)
      if (data?.time) {
        // solving a usual problem I have with timing of renders (VIDEO 66)
        const format = "yyyy-MM-dd'T'hh:mm:ss'Z'"
        setEvtTime(DateTime.fromFormat(data.time, format))
      }
    }, [data])

    const sendBet = async () => {
      const bet = await placeBet(authData.token, {score1, score2, 'event': event.id})
      console.log(bet);
    }

    if (error) return <h1>Error</h1>
    if (loading) return <h1>Loading...</h1>
      
    return (
    <>
    { event && evtTime && 
    <div>
      <h3>{event.team1} vs. {event.team2}</h3>
      { event.score1 >= 0 && event.score2 >= 0 &&
      <h2>{event.score1} : {event?.score2}</h2>
      }
      <h2>
        <CalendarTodayIcon className={classes.dateTime}/>{evtTime.toSQLDate()}
        <AlarmIcon className={classes.dateTime}/>{evtTime.toFormat('HH:mm')}
      </h2>
      <hr/>
      <br/>
      { event && event.bets && event.bets.map(bet => {
        return <div key={bet.id} className={classes.bets}>
            <User user={bet.user}/>
            <h4>{bet.score1} : {bet.score2}</h4>
            <h4>PTS</h4>
          </div>
      })}
      <hr/>
      <br/>
      <TextField
        label="Score 1"
        type="number"
        variant="standard"
        onChange={ e => setScore1(e.target.value)}
      />
      :
      <TextField
        label="Score 2"
        type="number"
        variant="standard"
        onChange={ e => setScore2(e.target.value)}
      />
      <Button variant="contained" color="primary"
      onClick={() => sendBet()} disabled={!score1 || !score2}
      >
        Bet
      </Button>
    </div>
    }
    </>
    )
}
