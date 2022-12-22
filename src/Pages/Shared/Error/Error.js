import React from "react";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="container text-center mb-5">
      <Image
        style={{ width: "850px" }}
        fluid
        src="https://webdeasy.de/wp-content/uploads/2020/06/404-pages.jpg"
      />
      <div className="display-1 mb-2 fw-semibold">Oops!</div>
      <div className="display-5 mb-3">Page is not found!</div>
      <Link to="/">
        <Button variant="dark">Back to Home</Button>
      </Link>
    </div>
  );
};

export default Error;
