import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import styled from 'styled-components'

function RegistrationForm(props) {
    return (
        <Form>
            <Form.Group controlId="formGroupEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter Email">
        </Form.Group>
        <Button>Submit</Button>
        </Form>
    );
}
default export RegistrationForm;
