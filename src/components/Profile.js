import React from 'react';
import Col from 'react-bootstrap/lib/Col';
import ProfileImage from './ProfileImage';

export default class Profile extends React.Component {
    render() {
        return (
            <div>
                <Col xs={6} md={4}> <ProfileImage/> </Col>
                    <Col xs={12} md={8}> <h1>Profile Name Here</h1>
                                         <p># of happy points total</p>
                                         <p>total things sent</p>
                                         <p>total things received</p>
                    </Col>
                <div>
                    <h2>Recent Gifts</h2>
                </div>
            </div>
        );
    }
}