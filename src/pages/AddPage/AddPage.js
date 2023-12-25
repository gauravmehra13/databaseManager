import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { addUser } from "../../app/slice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./AddPage.css";

function AddPage() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.users);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      // Form is valid
      const highestId = Math.max(
        ...userData.map((item) => parseInt(item.id, 10)),
        0
      );
      const newId = highestId + 1;

      console.log("Adding user with values:", name, email, username);
      dispatch(addUser({ id: newId, name, email, username }));

      navigate("/");
    }

    setValidated(true);
  };

  return (
    <>
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
              placeholder="User Name"
              required
              onChange={(e) => setUserName(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid UserName.
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
    </>
  );
}

export default AddPage;
