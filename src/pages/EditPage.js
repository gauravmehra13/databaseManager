import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editUser } from "../app/slice";
import "./AddPage/AddPage.css";

function EditPage() {
  const { id } = useParams();
  const parsedId = parseInt(id, 10); // Convert id to number

  const userData = useSelector((state) => state.user.users);
  const existingUser = userData.find((user) => user.id === parsedId);

  const [uName, setUName] = useState("");
  const [uEmail, setUEmail] = useState("");
  const [uUSername, setUUsername] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [validated, setValidated] = useState(false);

  useEffect(() => {
    if (existingUser) {
      setUName(existingUser.name);
      setUEmail(existingUser.email);
      setUUsername(existingUser.username);
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
        username: uUSername,
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
            <i className="icon icon-user"></i>
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
            value={uUSername}
            onChange={(e) => setUUsername(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid course.
          </Form.Control.Feedback>
        </div>

        <div
          className="form-group"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Button type="submit" className="btn btn-block create-account">
            Add User
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default EditPage;
