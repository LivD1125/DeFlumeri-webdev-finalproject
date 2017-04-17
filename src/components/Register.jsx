import React from 'react';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Button from 'react-bootstrap/lib/Button';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';

function FieldGroup({ id, label, help, props}) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}

export default class Register extends React.Component {
    render() {
        return (
            <form>
                <FieldGroup
                    id="formControlsText"
                    type="text"
                    label="Username"
                    placeholder="Username"
                />
                <FieldGroup
                    id="formControlsEmail"
                    type="email"
                    label="Email address"
                    placeholder="Enter email"
                />
                <FieldGroup
                    id="formControlsPassword"
                    label="Password"
                    type="password"
                />
                <FieldGroup
                    id="formControlsPhone"
                    type="text"
                    label="Phone Number"
                    help="XXX-XXX-XXXX"
                />
                <Button type="submit">
                    Submit
                </Button>
            </form>
        );
    }
}