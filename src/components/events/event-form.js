import { useLocation } from 'react-router-dom';


export default function EventForm(){

    const {state} = useLocation();
    const {group} = state;
    console.log(state)

    return (
        <h1>New Event for the group {state && state.id}</h1>

    )
}