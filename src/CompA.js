import react from 'react'
import { useSelector } from 'react-redux';

function CompA()
{
    const gamesobj = useSelector(state =>state)
    return(
        <div className='ca'>
            <h1>Ths is Component A</h1>
        <h1>The given name in gamesReducer is {gamesobj.gamename}</h1>
            <h1>The given Playername in gamesReducer is {gamesobj.playername}</h1>
            <h1>The given username is {gamesobj.username}</h1>
        </div>
    );
}

export default CompA