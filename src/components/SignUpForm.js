import React, { PropTypes } from 'react';
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

export default class SignUpForm extends React.Component {

    render() {
     return (
         <form>
             <FieldGroup
                 id="formControlsText"
                 type="text"
                 label="Username"
                 placeholder="Username"
                 onChange={this.props.onChange}
                 value={this.props.user.username}
             />
             <FieldGroup
                 id="formControlsEmail"
                 type="email"
                 label="Email address"
                 placeholder="Enter email"
                 onChange={this.props.onChange}
                 value={this.props.user.email}
             />
             <FieldGroup
                 id="formControlsPassword"
                 label="Password"
                 type="password"
                 onChange={this.props.onChange}
                 value={this.props.user.password}
             />
             <FieldGroup
                 id="formControlsPhone"
                 type="text"
                 label="Phone Number"
                 help="XXX-XXX-XXXX"
                 onChange={this.props.onChange}
                 value={this.props.user.phone}
             />
             <Button onClick={this.props.onSubmit} type="submit">
                 Submit
             </Button>
         </form>
     );
 }
}

 SignUpForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
};