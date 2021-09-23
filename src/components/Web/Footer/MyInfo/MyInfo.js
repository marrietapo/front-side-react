import React from 'react';
import LogoWhite from "../../../../assets/img/png/logo-white.png"
import SocialLinks from "../../SocialLinks";

import "./MyInfo.scss";

export default function MyInfo() {
    return (
        <div className="my-info">
            <img src={LogoWhite} alt="Logo"/>
            <h4>Empresa colaborativa de diseño y desarrollo de soluciones web a tu medida.</h4>
            <SocialLinks/>
        </div>
    )
}
