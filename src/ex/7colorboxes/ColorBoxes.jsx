import React, { Component } from 'react'
import Boxes from './Boxes';

import { Container } from './styles'

export class ColorBoxes extends Component {
    static defaultProps = {
        numBoxes: 24
    }

    render() {
        const boxes = Array.from({ length: this.props.numBoxes }).map(() => (<Boxes />))
        
        return (
            <Container>
                {boxes}
            </Container>
        )
    }
}

export default ColorBoxes
