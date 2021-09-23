import React from 'react';
import { Row, Col, Card, Avatar } from 'antd';
import NoAvatar from "../../../assets/img/png/no-avatar.png";

import "./ReviewsCourses.scss";

export default function ReviewsCourses() {

    return (
      <div>
        <Row className="reviews-courses">
          <Col lg={4} />
          <Col lg={16} className="reviews-courses_title">
            <h2>Forma parte de la comunidad de estudiantes mas grande</h2>
          </Col>
          <Col lg={4} />
        </Row>
        <Row className="reviews-courses">
          <Col lg={4} />
          <Col lg={16}>
            <Row className="row-cards">
              <Col md={8}>
                <CardReview
                  avatar={NoAvatar}
                  name="Carlos Alonso"
                  description="Alumno de Udemy"
                  review="Esta es la famosa review que debería ser mas larga pero me embola seguir escribiendo bobadas"
                />
              </Col>
              <Col md={8}>
                <CardReview
                  avatar={NoAvatar}
                  name="Carlos Alonso"
                  description="Alumno de Udemy"
                  review="Esta es la famosa review que debería ser mas larga pero me embola seguir escribiendo bobadas"
                />
              </Col>
              <Col md={8}>
                <CardReview
                  avatar={NoAvatar}
                  name="Carlos Alonso"
                  description="Alumno de Udemy"
                  review="Esta es la famosa review que debería ser mas larga pero me embola seguir escribiendo bobadas"
                />
              </Col>
            </Row>
          </Col>
          <Col lg={4} />
        </Row>
      </div>
    );
}

function CardReview(props){
    const { name, avatar, description, review } = props;
    const {Meta} = Card;

    return(
        <Card className="reviews-courses_card">
            <p>{review}</p>
            <Meta
                avatar={<Avatar src={avatar}/>}
                title={name}
                description={description}
            />
        </Card>
    )
}