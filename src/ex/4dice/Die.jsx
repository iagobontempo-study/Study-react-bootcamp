import React, { Component } from 'react'

import { FaDiceOne, FaDiceTwo, FaDiceThree, FaDiceFour, FaDiceFive, FaDiceSix } from 'react-icons/fa'

export class Die extends Component {
    renderDice = () => {
        switch (this.props.dice) {
            case 1:
                return <FaDiceOne size={250} className={`${this.props.rolling && 'shaking'}`}/>
            case 2:
                return <FaDiceTwo size={250} className={`${this.props.rolling && 'shaking'}`}/>
            case 3:
                return <FaDiceThree size={250} className={`${this.props.rolling && 'shaking'}`}/> 
            case 4://                                                 Same thing that \/
                return <FaDiceFour size={250} className={`${this.props.rolling ? 'shaking' : ''}`}/>
            case 5:
                return <FaDiceFive size={250} className={`${this.props.rolling ? 'shaking' : ''}`}/>
            case 6:
                return <FaDiceSix size={250} className={`${this.props.rolling ? 'shaking' : ''}`}/>
        }
    }

    render() {
        return (
            <div>
                {this.renderDice()}
            </div>
        )
    }
}

export default Die
