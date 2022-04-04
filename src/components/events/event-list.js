import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {DateTime} from 'luxon';
import { makeStyles } from '@material-ui/core/styles';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AlarmIcon from '@mui/icons-material/Alarm';


const useStyles = makeStyles( theme => ({
    dateTime: {
      fontSize: '18px',
      marginRight: '3px',
      marginTop: '10px',
      // color: theme.colors.mainAccentColor
      color: 'gold',
    },
  }));


export default function EventList({events}){
    const classes = useStyles();
    const history = useNavigate();
    const openEvent = eventId => {
        history(`/event/${eventId}`);
    }

    return (
    <>
        <h3>Events:</h3>
        { events && events.map ( event => {
        const format = "yyyy-MM-dd'T'hh:mm:ss'Z'"
        const evtTime = DateTime.fromFormat(event.time, format)
        
        return <div key={event.id} onClick={() => openEvent(event.id)}>
            <h3>{event.team1} vs. {event.team2}
            &nbsp; : &nbsp;
            <CalendarTodayIcon className={classes.dateTime}/>{evtTime.toSQLDate()}
            <AlarmIcon className={classes.dateTime}/>{evtTime.toFormat('HH:mm')}
            </h3>
        </div>
        })}
    </>
    )
}
