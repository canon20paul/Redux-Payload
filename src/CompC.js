import React from 'react'
import { useDispatch } from 'react-redux'

function CompC()
{
    const dispatch=useDispatch()
        function changeusername()
        {
            const user={
                username:'Alexander',
                userid:'12',
                useremail:'alexander123@gmail.com'
            }
            dispatch({type:'CHANGE_USERNAME', payload:user})
        }


    return(
        <div>
            <h1>This is Component C</h1>
            <button onClick={changeusername}>CHANGE USERNAME</button>
        </div>
    )
}
export default CompC