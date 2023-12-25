import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { addUser } from "../app/slice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./AddPage.css";
function AddPage() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.data);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const highestId = Math.max(
    ...userData.map((item) => parseInt(item.id, 10)),
    0
  );
  const newId = highestId + 1;
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    // event.preventDefault();
    // dispatch(addUser({id:newId,name,email,course}))
    // navigate('/')

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      // Form is valid, dispatch the action and navigate
      dispatch(addUser({ id: newId, name, email, course }));
      navigate("/");
    }

    setValidated(true);
  };

  return (
    <>
      {/* <div
        className="container mt-5 p-5"
        style={{ margin: "0 auto", border: "1px solid #5316de" }}
      >
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>E-mail</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="email"
                  placeholder="User e-mail"
                  aria-describedby="inputGroupPrepend"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid email.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label>Course</Form.Label>
              <Form.Control
                type="text"
                placeholder="Course"
                required
                onChange={(e) => setCourse(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid course.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Button type="submit" className="btn btn-success">
            Add
          </Button>
        </Form>
      </div> */}

      <div className="registration-form mt-5">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <div className="form-icon">
            <span>
              <i className="icon icon-user-follow"></i>
            </span>
          </div>
          <div className="form-group">
            <Form.Control
              required
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </div>

          <div className="form-group">
            <Form.Control
              type="email"
              placeholder="User e-mail"
              aria-describedby="inputGroupPrepend"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a valid email.
            </Form.Control.Feedback>
          </div>
          <div className="form-group">
            <Form.Control
              type="text"
              placeholder="Course"
              required
              onChange={(e) => setCourse(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid course.
            </Form.Control.Feedback>
          </div>

          <div
            className="form-group"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <button type="submit" class="btn btn-block create-account">
              Add User
            </button>
          </div>
        </Form>
      </div>
    </>
  );
}

export default AddPage;
