import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editUser } from "../app/slice";
import "./AddPage.css";

function EditPage() {
  const { id } = useParams();
  const parsedId = parseInt(id, 10); // Convert id to number

  const userData = useSelector((state) => state.user.data);
  const existingUser = userData.find((user) => user.id === parsedId);

  const [uName, setUName] = useState("");
  const [uEmail, setUEmail] = useState("");
  const [uCourse, setUCourse] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [validated, setValidated] = useState(false);

  useEffect(() => {
    if (existingUser) {
      setUName(existingUser.name);
      setUEmail(existingUser.email);
      setUCourse(existingUser.course);
    }
  }, [existingUser]);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      const updatedUser = {
        name: uName,
        email: uEmail,
        course: uCourse,
      };

      dispatch(editUser({ id: parsedId, updatedUser }));
      navigate("/");
    }

    setValidated(true);
  };

  if (!existingUser) {
    // Handle case where user with the given ID is not found
    return <div>User not found</div>;
  }

  return (
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
            value={uName}
            onChange={(e) => setUName(e.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </div>

        <div className="form-group">
          <Form.Control
            type="email"
            placeholder="User e-mail"
            aria-describedby="inputGroupPrepend"
            required
            value={uEmail}
            onChange={(e) => setUEmail(e.target.value)}
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
            value={uCourse}
            onChange={(e) => setUCourse(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid course.
          </Form.Control.Feedback>
        </div>

        <div
          className="form-group"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Button type="submit" class="btn btn-block create-account">
            Add User
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default EditPage;
