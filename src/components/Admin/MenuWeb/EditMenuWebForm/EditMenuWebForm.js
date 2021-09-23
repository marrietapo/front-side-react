import React, { useState, useEffect } from "react";
import { Form, Input, Button, Select, notification } from "antd";
import { LinkOutlined, FontSizeOutlined } from "@ant-design/icons";
import { updateMenuApi } from "../../../../api/menu";
import { getAccessTokenApi } from "../../../../api/auth";

import "./EditMenuWebForm.scss";

export default function EditMenuWebForm(props) {
  const { setModalVisible, setReloadMenu, menu } = props;
  const [menuWebData, setMenuWebData] = useState({_id: menu._id, title:menu.title, url:menu.url, http: menu.url.includes("http://")?"http://":"https://"});

  useEffect(() => {
    setMenuWebData({
        _id: menu._id,
      title: menu.title,
      url: menu.url,
      http: menu.url.includes("http://") ? "http://" : "https://",
    });
  }, [menu]);

  const editMenu = (e) => {
    e.preventDefault();
    let finalData = {
      title: menuWebData.title,
      url: menuWebData.http + replaceURL(menuWebData.url)
    };

    if (!finalData.title || !finalData.url || !menuWebData.url) {
      notification["error"]({
        message: "Todos los campos son obligatorios.",
      });
    } else {
      const accessToken = getAccessTokenApi();

      updateMenuApi(accessToken, menuWebData._id, finalData)
        .then((response) => {
          notification["success"]({
            message: response,
          });
          setModalVisible(false);
          setReloadMenu(true);
        })
        .catch(() => {
          notification["error"]({
            message: "Error del servidor.",
          });
        });
    }
  };
  const replaceURL = (url) => {
    let re = /http:\/\/|https:\/\//gi;
    return url.replace(re, "");
  };

  return (
    <div className="edit-menu-web-form">
      <EditForm
        menuWebData={menuWebData}
        setMenuWebData={setMenuWebData}
        editMenu={editMenu}
      />
    </div>
  );
}

function EditForm(props) {
  const { editMenu, menuWebData, setMenuWebData } = props;

  const { Option } = Select;

  const selectBefore = (
    <Select
      defaultValue="http://"
      style={{ width: 90 }}
      onChange={(e) => setMenuWebData({ ...menuWebData, http: e })}
    >
      <Option value="http://">http://</Option>
      <Option value="https://">https://</Option>
    </Select>
  );

  const replaceURL = (url) => {
    let re = /http:\/\/|https:\/\//gi;
    return url.replace(re, "");
  };

  return (
    <Form className="form-add" onSubmitCapture={editMenu}>
      <Form.Item>
        <Input
          prefix={<FontSizeOutlined />}
          placeholder="Titulo"
          value={menuWebData.title}
          onChange={(e) =>
            setMenuWebData({ ...menuWebData, title: e.target.value })
          }
        />
      </Form.Item>
      <Form.Item>
        <Input
          addonBefore={selectBefore}
          placeholder="URL"
          prefix={<LinkOutlined />}
          value={replaceURL(menuWebData.url)}
          onChange={(e) =>
            setMenuWebData({ ...menuWebData, url: e.target.value })
          }
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="btn-submit">
          Actualizar Menú
        </Button>
      </Form.Item>
    </Form>
  );
}
