import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {

            name1: props.name1,
            name2: props.name2,
            winningScore: props.winningScore,
            serviceLength: props.serviceLength,
        };
    
        this.handleName1 = this.handleName1.bind(this);
        this.handleName2 = this.handleName2.bind(this);
        this.handleWinningScore = this.handleWinningScore.bind(this);
        this.handleServiceLength = this.handleServiceLength.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

handleName1(e) {
    
    this.setState({ name1: e.currentTarget.value });
}

handleName2(e) {
    
  this.setState({ name2: e.currentTarget.value });
}

handleWinningScore(e) {
    
  this.setState({ winningScore: e.currentTarget.value });
}

handleServiceLength(e) {
    
  this.setState({ serviceLength: e.currentTarget.value });
}

handleSubmit(e) {
    
    let { name1, name2, winningScore, serviceLength } = this.state;

    e.preventDefault();
    this.props.handleSave(name1, name2, winningScore, serviceLength);

}

render() {

let { name1, name2, winningScore, serviceLength } = this.state;

    return (
        <Form onSubmit={ this.handleSubmit }>
            <Form.Group>
                <Form.Label>Player 1 Name</Form.Label>
                <Form.Control
                    onChange={ this.handleName1 }
                    value={ name1 }
                />

                <Form.Label>Player 2 Name</Form.Label>
                <Form.Control
                    onChange={ this.handleName2 }
                    value={ name2 }
                /> 

                <Form.Label>Winning Score</Form.Label>
                <Form.Control
                    onChange={ this.handleWinningScore }
                    value={ winningScore }
                /> 

                <Form.Label>Alternate Server Every</Form.Label>
                <Form.Control
                    onChange={ this.handleServiceLength }
                    value={ serviceLength }
                /> 
            </Form.Group>

            <Button 
              type="submit" 
              variant="btn btn-success"
            >Save</Button>

        </Form>
    ); }
}
export default Settings;