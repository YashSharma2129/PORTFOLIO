import React from "react";
import { Button } from "react-bootstrap"; // Import Button from react-bootstrap
import { BsFillAwardFill } from "react-icons/bs"; // Icon import

function ExperienceCard({
  title,
  company,
  duration,
  description,
  responsibilities,
  companyLink,
  certLink,
}) {
  // Function to validate the company link
  const isValidLink = (link) => {
    return link && (link.startsWith("http://") || link.startsWith("https://"));
  };

  return (
    <div className="experience-card-content bg-dark text-white p-4 rounded">
      <h3>{title}</h3>
      <p>
        <strong>{company}</strong> |<br /> {duration}
      </p>
      <p>{description}</p>

      <ul>
        {responsibilities.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>

      {/* Certification Link */}
      {certLink && (
        <Button variant="primary" href={certLink} target="_blank">
          <BsFillAwardFill /> &nbsp; View Certification
        </Button>
      )}


    </div>
  );
}

export default ExperienceCard;
