/**
 * Created by ARSYI on 23/12/17.
 */
import React from 'react';

class Question extends React.Component {

    saveAndContinue(e) {
        e.preventDefault()

        // Get values via this.refs
        var data = {
            name     : this.refs.name.getDOMNode().value,
            password : this.refs.password.getDOMNode().value,
            email    : this.refs.email.getDOMNode().value,
        }

        this.props.saveValues(data)
        this.props.nextStep()
    }


    render() {
        return (
            <div>
                <label>Name</label>
                <input type="text" ref="name" defaultValue={this.props.fieldValues.name}/>
                <label>Password</label>
                <input type="password" ref="password" defaultValue={this.props.fieldValues.password}/>
                <label>Email</label>
                <input type="text" ref="name" defaultValue={this.props.fieldValues.email}/>
                <button onClick={ this.saveAndContinue }>Save and Continue</button>
            </div>
        )
    }
}
export default Question