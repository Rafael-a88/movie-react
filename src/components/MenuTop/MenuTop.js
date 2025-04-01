import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";
import './MenuTop.scss';

export default function MenuTop() {
  const menuItems = [
    {
      key: "1",
      label: <Link to="/">Home</Link>,
    },
    {
      key: "2",
      label: <Link to="/new-movies">Últimos lanzamientos</Link>,
    },
    {
      key: "3",
      label: <Link to="/popular">Popular</Link>,
    },
    {
      key: "4",
      label: <Link to="/search">Search</Link>,
    },
  ];

  return (
    <div className="menu-top">
      <div className="menu-top__logo">
        <Logo />
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        style={{ lineHeight: "64px", width: "100%" }}
        items={menuItems}
      />
    </div>
  );
}
