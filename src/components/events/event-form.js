import { useLocation } from 'react-router-dom';
import { CssTextField } from '../layout/element';


export default function EventForm(){

    // const {state} = useLocation();
    // const {group} = state;
    // console.log(state)

    return (
        <div>
            <CssTextField label="Team 1" />
            <h1>New Event for the group</h1>
        </div>
    )
}