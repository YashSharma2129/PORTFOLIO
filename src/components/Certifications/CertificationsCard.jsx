import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { BsFillAwardFill } from "react-icons/bs";

function CertificationCard(props) {
  return (
    <Card className="certification-card-view">
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Card.Text style={{ color: "gray" }}>
          <strong>Issued By:</strong> {props.issuer} <br />
          <strong>Completion Date:</strong> {props.completionDate}
        </Card.Text>
        {props.certLink && (
          <Button variant="primary" href={props.certLink} target="_blank">
            <BsFillAwardFill /> &nbsp; View Certification
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default CertificationCard;
