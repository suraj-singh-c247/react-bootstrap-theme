import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap"; // Import Form and Button from react-bootstrap
import { buttonVariants } from "../constants";
import CommonButton from "./common/CommonButton";

function FormComponent() {
  return (
    <Row className="align-items-center justify-content-md-center">
      <Col xs={6}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <CommonButton variant={"primary"} type="submit">
            Submit
          </CommonButton>
        </Form>
      </Col>
    </Row>
  );
}

export default FormComponent;
