import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Navbar from './Navbar';
import DogList from './DogList';

import whiskey from './imgs/whiskey.jpg'
import tubby from './imgs/tubby.jpg'
import hazel from './imgs/hazel.jpg'
import DogDetails from './DogDetails';

export class DogRouter extends Component {
    static defaultProps = {
        dog: [
            { name: "Whiskey", age: 5, src: whiskey, facts: ['Whiskey loves eating popcorn', 'Whiskey cant be drunk'] },
            { name: "Tubby", age: 10, src: tubby, facts: ['Tubby loves eating popcorn', 'Tubby cant be drunk'] },
            { name: "Hazel", age: 3, src: hazel, facts: ['Hazel loves eating popcorn', 'Hazel cant be drunk'] },
        ]
    }


    render() {
        const getDog = props => {
            let name = props.match.params.name;
            let currentDog = this.props.dog.find(
                d => d.name.toLowerCase() === name.toLowerCase()
            );
            return <DogDetails {...props} dog={currentDog} />
        }

        return (
            <BrowserRouter>
                <Navbar dogs={this.props.dog} />
                <Switch>
                    <Route exact path="/dogs" render={() => <DogList dogs={this.props.dog} />} />
                    <Route exact path="/dogs/:name" render={getDog} />
                    <Redirect from='*' to='/dogs' />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default DogRouter
