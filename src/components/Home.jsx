import { Col, Form, Row } from "react-bootstrap";

export const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to Covid numbers of Karlsruhe!</h1>
      <Form>
        <Form.Control placeholder="City" as="select" />
        <Form.Control placeholder="From" type="date" name="duedate" />
      </Form>
    </div>
  );
};
