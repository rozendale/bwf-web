import { status } from '../utils';


export function getEvent(token, eventId){
    console.log(token, eventId)
    return fetch(`http://127.0.0.1:8000/api/events/${eventId}/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
        },
    })
    .then(status).catch( e => {console.log(e)})
}

export function placeBet(token, item){
    //console.log(token, eventId)
    return fetch(`http://127.0.0.1:8000/api/bet/place-bet/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
        },
        body: JSON.stringify(item)
    })
    .then(status).catch( e => {console.log(e)})
}