import React from "react";
import Card from "react-bootstrap/Card";
import { ImArrowRight2 } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone, my name is <span className="blue">Debbie Hall </span>
            and I'm from <span className="blue"> Delaware, Ohio.</span>
            <br />
            <br />
            I am a student in the OSU Coding Bootcamp. My first experience with coding was during my years at Southern Adventist University getting my B.S. in Mass Communications.
            <br />
            <br />
            I loved the introduction I got from my class during college and desided to learn more. It was a great dession.
            <br />
            <br />
            When I'm not coding, I love to dive into my other hobbies!
          </p>
          <ul>
            <li className="about-activity">
              <ImArrowRight2 /> Photography
            </li>
            <li className="about-activity">
              <ImArrowRight2 /> Baking
            </li>
            <li className="about-activity">
              <ImArrowRight2 /> Board Games
            </li>
          </ul>

          <p style={{ color: "rgb(121 137 216)" }}>
            "Venture outside your comfort zone. <br /> The rewards are worth it."{" "}
          </p>
          <footer className="blockquote-footer">Rapunzel (Tangled)</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;