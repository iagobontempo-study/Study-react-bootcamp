import React from 'react'
import Machine from './Machine';

function Index() {
    return (
        <div>
            <h1>Slot machine ex:</h1>
            <Machine slot1='X' slot2='Y' slot3='Z'/>
            <Machine slot1='X' slot2='X' slot3='X'/>
            <Machine slot1='X' slot2='Z' slot3='Z'/>
        </div>
    )
}

export default Index
