import React from 'react'

export default function Coin(props) {
    return (
        <div>
            {props.number === 1 ? <p>HEAD</p> : <p>TAIL</p> }
            <p>You flipped {props.count}! Head {props.head} and Tail {props.tail}</p>
        </div>
    )
}
