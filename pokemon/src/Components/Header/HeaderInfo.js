import React from "react";
import style from "./Header.module.css"
import { Logo } from "../../assents/images/index";

export class Header extends React.Component {


  render() {
    return <header className={style.header} >
    <div className="logo">
      <Logo className = {style.logo}/>
    </div>
    </header>;
  }
}
