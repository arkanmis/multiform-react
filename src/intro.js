/**
 * Created by P50 on 22/12/2017.
 */
import React from 'react';
import Topic from './topic.js';

class Intro extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>QUIZ</h1>
                <Topic />
                <div>
                    <button onclick={this.StartQuiz}>START</button>
                </div>
            </div>
        )
    }
}

export default Intro