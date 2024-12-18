import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            {/* Syeda Sabeen Fatima */}
            <a
              rel="noopener noreferrer"
              href=""
              target="_blank"
              className="sabeen-fatima"
            >
              <i className="fas fa-user-circle"></i> Sabeen Github
            </a>
            Copyright &copy; React E-Commerce
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
