import React, { Component } from 'react'
import Box from './Box';
import BoxForm from './BoxForm';

export class BoxList extends Component {
    state = {
        boxes: [
            { id: 1, width: 200, height: 200, background: '555' },
            { id: 2, width: 200, height: 200, background: '154' },
        ]
    }

    addBox = (box) => {
        this.setState(oldState => ({
            boxes: [...oldState.boxes, box]
        }))
    }

    removeBox = (id) => {
        this.setState({
            boxes: this.state.boxes.filter(box => box.id !== id)
        })
    }

    renderList = () => {
        return (
            <ul>
                {this.state.boxes.map(box => (
                    <Box id={box.id}
                        width={box.width}
                        height={box.height}
                        background={box.background}
                        removeBox={() => this.removeBox(box.id)} />
                ))}
            </ul>
        )
    }

    render() {
        return (
            <div>
                <BoxForm addBox={this.addBox} />
                <h1>List</h1>
                {this.renderList()}
            </div>
        )
    }
}

export default BoxList
