import React, {useEffect, useState} from 'react';
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

    return (
    <>
        <h3>Events:</h3>
        { events && events.map ( event => {
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
    )
}
