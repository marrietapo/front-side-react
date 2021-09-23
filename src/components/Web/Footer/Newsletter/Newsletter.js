import React, { useState } from "react";
import { Form, Input, Button, notification } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { suscribeNewsletterApi } from "../../../../api/newsletter";

import "./Newsletter.scss";


export default function Newsletter() {
  const [email, setEmail] = useState("");

  const suscribe = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-useless-escape
    const emailValid = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    const resultValidation = emailValid.test(email);

    if (!resultValidation) {
      notification["error"]({
        message: "Correo electrónico inválido.",
      });
    } else {
      suscribeNewsletterApi(email).then((response) => {
        if (response.code !== 201) {
            console.log(response);
          notification["warning"]({
            message: response.message,
          });
        } else {
          notification["success"]({
            message: response.message,
          });
          setEmail("");
        }
      });
    }
  };

  return (
    <div className="newsletter">
      <h3>Newsletter</h3>
      <Form onSubmitCapture={suscribe}>
        <Form.Item>
          <Input
            prefix={<MailOutlined className="newsletter_icon" />}
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Me suscribo!
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
