import React from 'react';
import { Link } from 'react-router';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import { login } from '../utilities/Services';

export default class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            errors: {},
            user: {
                username: '',
                password: '',
            }
        };

        this.processForm = this.processForm.bind(this);
        this.changeUser = this.changeUser.bind(this);
    }

    processForm(event) {
        console.log('process');
        // prevent default action. in this case, action is the form submission event
        event.preventDefault();
        var us = login(this.state.user);
        console.log(us);
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
                <Form horizontal>
                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                            Username
                        </Col>
                        <Col sm={10}>
                            <FormControl
                                type="username"
                                name="username"
                                value={this.state.user.username}
                                onChange={this.changeUser}
                                placeholder="Email" />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} sm={2}>
                            Password
                        </Col>
                        <Col sm={10}>
                            <FormControl
                                type="password"
                                name="password"
                                value={this.state.user.password}
                                onChange={this.changeUser}
                                placeholder="Password" />
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Checkbox>Remember me</Checkbox>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button onClick={this.processForm} type="submit">
                                Sign in
                            </Button>
                        </Col>
                        <Col smOffset={2} sm={10}>
                        <p>Not a User?</p>
                        <Link to="/register"><Button bsStyle="link">Register Here</Button></Link>
                        </Col>
                    </FormGroup>
                </Form>
        );

    }
}