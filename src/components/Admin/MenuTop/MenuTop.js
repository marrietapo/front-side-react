import React from "react";
import { Link } from "react-router-dom";
import {Button} from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined, PoweroffOutlined,
} from "@ant-design/icons";
import Logo from "../../../assets/img/png/logo-white.png";
import { logout } from "../../../api/auth";

import "./MenuTop.scss"

export default function MenuTop(props){

  const {menuCollapsed, setMenuCollapsed} = props;
  const logoutUser = ()=>{
    logout();
    window.location.reload();
  }

    return (
      <div className="menu-top">
        <div className="menu-top_left">
           <Link to={"/admin"}>
            <img className="menu-top_left_logo" src={Logo} alt="Logo" />

           </Link>
          <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
            {menuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
        </div>
        <div className="menu-top_right">
          <Button type="link" onClick={() => logoutUser()}>
            <PoweroffOutlined />
          </Button>
        </div>
      </div>
    );
}