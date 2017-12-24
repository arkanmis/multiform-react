/**
 * Created by ARSYI on 23/12/17.
 */
import React from 'react';
import Intro from './intro.js';
import Question from './question.js'
import Finish from './finish.js'

class Quiz extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            step:1
        }
    }

    render() {
        var fieldValues = {
            name: null,
            email: null,
            password:null,
            age:null,
            colors:[]
        }
        switch (this.state.step) {
            case 1:
                return <Intro />
            case 2:
                return <Question />
            case 3:
                return <Finish />
        };

    }
}

export default Quiz


