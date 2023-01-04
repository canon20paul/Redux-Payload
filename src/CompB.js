import react,{useState} from 'react'
import { useDispatch } from 'react-redux'

function CompB() {

    const[gamename, setGamename]=useState('')
    const[playername, setPlayername]=useState('')
    const dispatch = useDispatch()
function changename()
{

dispatch({type:'CHANGE_NAME', payload:gamename})
}

    function changeplayer() {

        dispatch({ type: 'CHANGE_PLAYER', payload: playername })
    }

    return (
        <div className="cb">
        <h1>Ths is Component B</h1>

        <input type="text" placeholder='new game' value={gamename} onChange={(e)=>{setGamename(e.target.value)}}/>
        <button onClick={changename}>CHANGE GAME NAME</button><br/>
            <input type="text" placeholder='new player' value={playername} onChange={(e) => { setPlayername(e.target.value) }} />
            <button onClick={changeplayer}>CHANGE PLAYER NAME</button>
        </div>
    )
}

export default CompB