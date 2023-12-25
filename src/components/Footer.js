import React from "react";
import "./Footer.css";
const Footer = (props) => {
  return (
    <div>
      <div
        className="footer-basic"
        style={{
          backgroundColor: `${
            props.styleMode === "dark" ? "black" : "#f7f7f7"
          }`,
        }}
      >
        <footer>
          <div className="social">
            <a
              href="https://github.com/gauravmehra13"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github"></i>{" "}
            </a>
            <a
              href="https://www.linkedin.com/in/gaurav-mehra-95230a1a5/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>{" "}
            </a>
            <a href="#">
              <i className="fa-brands fa-instagram"></i>{" "}
            </a>

            <a href="#">
              <i className="fa-brands fa-twitter"></i>{" "}
            </a>
          </div>
          {/* <ul className="list-inline">
                <li className="list-inline-item"><a href="#">Home</a></li>
                <li className="list-inline-item"><a href="#">Services</a></li>
                <li className="list-inline-item"><a href="#">About</a></li>
                <li className="list-inline-item"><a href="#">Terms</a></li>
                <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
            </ul> */}
          <p className="copyright">Gaurav Mehra © 2022</p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
