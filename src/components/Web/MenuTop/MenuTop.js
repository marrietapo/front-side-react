import React, {useState, useEffect} from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { getMenuApi } from "../../../api/menu";
import SocialLinks from "../SocialLinks/SocialLinks";
import logoWhite from "../../../assets/img/png/logo-white.png"


import "./MenuTop.scss";

export default function MenuTop(){
    const [menuData, setMenuData] = useState([]);

    useEffect(() => {
        getMenuApi().then(response =>{
            const array = [];
            console.log(response);
            response.menus.forEach(item=>{
                item.active && array.push(item)
            });
            setMenuData(array);
        })
    }, []);

    return (
      <Menu className="menu-top-web" mode="horizontal">
        <Menu.Item className="menu-top-web-left_logo" >
          <Link to={"/"}>
            <img src={logoWhite} alt="Logo" />
          </Link>
        </Menu.Item>
        {menuData.map((item) => {
          const external = item.url.indexOf("http") > -1 ? true : false;

          if (external) {
            return (
              <Menu.Item key={item._id} className="menu-top-web-left_item">
                <a href={item.url} target="_blank" rel="noreferrer">
                  {item.title}
                </a>
              </Menu.Item>
            );
          } else {
            return (
              <Menu.Item key={item._id} className="menu-top-web-left_item">
                <Link to={item.url}>{item.title}</Link>
              </Menu.Item>
            );
          }
        })}

        <SocialLinks className="menu-top-web-right" />
      </Menu>
    );
}