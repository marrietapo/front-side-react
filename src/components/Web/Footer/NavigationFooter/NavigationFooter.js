import React from 'react';
import { Row, Col } from 'antd';
import { Link } from "react-router-dom";
import {
  BookOutlined,
  CodeOutlined, 
  RightOutlined, 
  DatabaseOutlined,
  HddOutlined, 
  AppstoreOutlined, UserOutlined
} from "@ant-design/icons";


import "./NavigationFooter.scss";

export default function NavigationFooter() {
    return (
      <Row className="navigation-footer">
        <Col md={24}>
          <h3>Navegación</h3>
        </Col>
        <Col md={12}><RenderListLeft/></Col>
        <Col md={12}><RenderListRight/></Col>
      </Row>
    );
}


function RenderListLeft(){
    return (
      <ul>
        <li>
          <a href="#">
            <BookOutlined /> Cursos online
          </a>
        </li>
        <li>
          <Link to="/Contact">
            <CodeOutlined />
            Desarrollo Web
          </Link>
        </li>
        <li>
          <Link to="/Contact">
            <RightOutlined/>
            Politicas de privacidad
          </Link>
        </li>
        <li>
          <Link to="/Contact">
            <DatabaseOutlined />
            Base de Datos
          </Link>
        </li>
      </ul>
    );
}

function RenderListRight() {
  return (
    <ul>
      <li>
        <a href="#">
          <HddOutlined /> Servidores
        </a>
      </li>
      <li>
        <Link to="/Contact">
          <AppstoreOutlined />
          CMS
        </Link>
      </li>
      <li>
        <Link to="/Contact">
          <RightOutlined />
          Políticas de cookies
        </Link>
      </li>
      <li>
        <Link to="/Contact">
          <UserOutlined />
          Portfolio
        </Link>
      </li>
    </ul>
  );
}