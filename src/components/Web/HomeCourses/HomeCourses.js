import React from "react";
import { Row, Col, Card, Button } from "antd";
import { Link } from "react-router-dom";
import reactHooks from "../../../assets/img/jpg/react-js-hooks.jpg";
import reactNative from "../../../assets/img/jpg/react-native.jpg";
import javascript from "../../../assets/img/jpg/javascript-es6.jpg";

import "./HomeCourses.scss";

export default function HomeCourses() {
  return (
    <Row className="home-courses">
      <Col lg={24} className="home-courses_title">
        <h2>Aprende y mejora tus habilidades</h2>
      </Col>
      <Col lg={4} />
      <Col lg={16}>
        <Row className="row-courses">
          <Col md={6}>
            <CardCourse
              image={reactHooks}
              title="React JS Hooks"
              description="Intermedio - React/Javascript"
              link={"https://www.google.com"}
            />
          </Col>
          <Col md={6}>
            <CardCourse
              image={reactNative}
              title="React Native"
              description="Intermedio - React/Javascript"
              link={"https://www.google.com"}
            />
          </Col>
          <Col md={6}>
            <CardCourse
              image={javascript}
              title="Javascript"
              description="Intermedio - Javascript"
              link={"https://www.google.com"}
            />
          </Col>
          <Col md={6}>
            <CardCourse
              image={reactHooks}
              title="React JS Hooks"
              description="Intermedio - React/Javascript"
              link={"https://www.google.com"}
            />
          </Col>
        </Row>
        <Row className="home-courses">
          <Col md={6}>
            <CardCourse
              image={javascript}
              title="React JS Hooks"
              description="Intermedio - React/Javascript"
              link={"https://www.google.com"}
            />
          </Col>
          <Col md={6}></Col>
          <Col md={6}></Col>
          <Col md={6}>
            <CardCourse
              image={reactNative}
              title="React JS Hooks"
              description="Intermedio - React/Javascript"
              link={"https://www.google.com"}
            />
          </Col>
        </Row>
      </Col>
      <Col lg={4} />
      <Col lg={24} className="home-courses_more">
        <Link to="courses">
          <Button>VER MAS</Button>
        </Link>
      </Col>
    </Row>
  );
}

function CardCourse(props) {
  const { image, title, description, link } = props;
  const { Meta } = Card;

  return(
      <a href={link} target="_blank" rel="noreferrer">
        <Card 
            className="home-courses_card"
            cover={<img src={image} alt={title}/>}
            actions={[<Button>INGRESAR</Button>]}
            
        >
            {<Meta title={title} description={description}/>}
        </Card>

      </a>
  )

}
