import React from "react";
import HeaderClasses from "./Header.module.css";

export default function Header() {
  return (
    <div className={HeaderClasses.headerClass}>
      <img src="//cdn.jsdelivr.net/emojione/assets/png/1f638.png"></img>
      <div>Emoji Search</div>
      <img src="//cdn.jsdelivr.net/emojione/assets/png/1f63a.png"></img>
    </div>
  );
}
