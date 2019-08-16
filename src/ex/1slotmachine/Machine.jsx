import React from 'react'

function Machine(props) {
    return (
        <div>
            <p> {props.slot1} {props.slot2} {props.slot3} </p>
            { props.slot1 === props.slot2 && props.slot2 === props.slot3 ? <p>You win!</p> : <p>You lose!</p> }
        </div>
    )
}

export default Machine
