import React, { useState } from "react";
import "./Sidebar.css";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import menu from "../../data/sidebar";
import SidebarItem from "./SidebarItem";
import { useNavigate } from "react-router-dom";
import { Typography, AppBar, Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/Home2");
  };

  return (
    <Typography className="layout">
      <Typography
        className="sidebar"
        style={{ width: isOpen ? "230px" : "60px" }}
      >
        <Typography className="top_section">
          <Typography
            className="logo"
            style={{ display: isOpen ? "block" : "none" }}
          >
            <Typography className="logo"></Typography>
          </Typography>

          <Typography
            className="bars"
            style={{ marginLeft: isOpen ? "100px" : "0px" }}
          >
            <ArrowForwardIosIcon onClick={toggle} />
          </Typography>
        </Typography>
        {menu.map((item: any, index: number) => {
          return <SidebarItem key={index} item={item} isOpen={isOpen} />;
        })}
      </Typography>

      <main
        style={{
          paddingLeft: isOpen ? "230px" : "60px",
          transition: "all .5s",
        }}
      >
        {children}
      </main>
    </Typography>
  );
};

export default Sidebar;
