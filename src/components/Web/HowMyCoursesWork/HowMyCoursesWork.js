import React from 'react';
import { Row, Col, Card } from 'antd';
import { ClockCircleOutlined, KeyOutlined, MessageOutlined, UserOutlined, DollarCircleOutlined, CheckCircleOutlined } from "@ant-design/icons";


import "./HowMyCoursesWork.scss";

export default function HowMyCoursesWork() {
    return (
      <Row className="how-my-courses-work">
        <Col lg={24} className="how-my-courses-work_title">
          <h2>¿Cómo ofuncionan mis cursos?</h2>
          <h3>
            Cada curso cuenta con contenido bajo la web de Udemy, activa 24
            horas al día los 365 días del año.
          </h3>
        </Col>
        <Col lg={4} />
        <Col lg={16}>
          <Row className="row-cards">
            <Col md={8}>
              <CardInfo
                title="Cursos y clases"
                description="Cursos de entre 10 y 30 horas"
                icon={<ClockCircleOutlined />}
              />
            </Col>

            <Col md={8}>
              <CardInfo
                title="Acceso 24hs"
                description="Acceso 24 horas todos los días de la semana"
                icon={<KeyOutlined />}
              />
            </Col>

            <Col md={8}>
              <CardInfo
                title="Aprendizaje colaborativo"
                description="Aprende de manera colaborativa junto a tus compañeros"
                icon={<MessageOutlined />}
              />
            </Col>
          </Row>
          <Row className="row-cards">
            <Col md={8}>
              <CardInfo
                title="Mejora tu perfil"
                description="Cursos de entre 10 y 30 horas"
                icon={<UserOutlined />}
              />
            </Col>

            <Col md={8}>
              <CardInfo
                title="Precios bajos"
                description="Obtén tu curso por solo 9.99"
                icon={<DollarCircleOutlined />}
              />
            </Col>

            <Col md={8}>
              <CardInfo
                title="Certificado de finalización"
                description="Aprende de manera colaborativa junto a tus compañeros"
                icon={<CheckCircleOutlined />}
              />
            </Col>
          </Row>
        </Col>
        <Col lg={4} />
      </Row>
    );

    function CardInfo (props){
        const { icon , title, description }= props;
        const {Meta} = Card;

        return (
          <Card className="how-my-courses-work_card">
            {icon}
            <Meta title={title} description={description} />
          </Card>
        );
    }
}
