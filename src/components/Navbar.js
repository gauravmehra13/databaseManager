import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { queryUser } from "../app/slice";
import { Link } from "react-router-dom";

function NavigationBar(props) {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.user.query);

  const handleSearch = (e) => {
    dispatch(queryUser(e.target.value));
  };

  return (
    <Navbar
      expand="lg"
      bg={`${props.styleMode}`}
      data-bs-theme={`${props.styleMode}`}
    >
      <Container fluid>
        <Link to="/" style={{ textDecoration: "none" }}>
          {" "}
          <Navbar.Brand>
            {" "}
            <i className="icon icon-people mx-1"></i> Database Manager
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>

          <Form className="d-flex align-items-center">
            <Form.Check
              className="mx-3 text-center"
              type="switch"
              id="custom-switch"
              label={`${props.styleMode} mode`}
              style={{ whiteSpace: "nowrap" }}
              onChange={props.toggleMode}
            />

            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={query}
              onChange={handleSearch}
            />
            {/* <Button variant="outline-success">Search</Button> */}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
