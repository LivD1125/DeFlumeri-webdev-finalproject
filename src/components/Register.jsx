import React from 'react';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Button from 'react-bootstrap/lib/Button';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import { createUser } from '../utilities/Services';


export default class Register extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            errors: {},
            user: {
                email: '',
                username: '',
                name: '',
                password: '',
                phone: ''
            }
        };

        this.processForm = this.processForm.bind(this);
        this.changeUser = this.changeUser.bind(this);
    }
    processForm(event) {
        // prevent default action. in this case, action is the form submission event
        event.preventDefault();
        createUser(this.state.user);
    }

    changeUser(event) {
        const field = event.target.name;
        const user = this.state.user;
        user[field] = event.target.value;

        this.setState({
            user
        });
    }
    render() {
        return (
            <form>
                <FormGroup controlId="formControlsText">
                    <ControlLabel>Username</ControlLabel>
                    <FormControl placeholder="Username"
                                 type="text"
                                 name='username'
                                 onChange={this.changeUser}
                                 value={this.state.user.username}
                    />
                </FormGroup>
                <FormGroup controlId="formControlsEmail">
                    <ControlLabel>Email address</ControlLabel>
                    <FormControl placeholder="Enter email"
                                 type="email"
                                 name="email"
                                 onChange={this.changeUser}
                                 value={this.state.user.email} />
                </FormGroup>
                <FormGroup controlId="formControlsPassword">
                    <ControlLabel>Password</ControlLabel>
                    <FormControl placeholder="password"
                                 type="password"
                                 name="password"
                                 onChange={this.changeUser}
                                 value={this.state.user.password} />
                </FormGroup>
                <FormGroup controlId="formControlsPhone">
                    <ControlLabel>Phone Number</ControlLabel>
                    <FormControl
                         placeholder="XXX-XXX-XXXX"
                         type="text"
                         name="phone"
                         onChange={this.changeUser}
                         value={this.state.user.phone} />
                </FormGroup>
                <Button onClick={this.processForm} type="submit">
                    Submit
                </Button>
            </form>
        );
    }
}