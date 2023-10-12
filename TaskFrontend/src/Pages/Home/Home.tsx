import React from "react";
import { Typography, AppBar, Button, Stack } from "@mui/material";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import "./Home.css";
import heroImg from "../../assets/inv-img.png";
import Login from "../auth/Login";

interface NumberTextProps {
  num: number;
  text: string;
}

const OnlineStatusIcon = () => (
  <img
    src="https://www.mandsconsulting.com/wp-content/uploads/MS-Logo-Web-H-500x164-White-White.svg" // Replace with the actual path to your icon image
    alt="Online Icon"
    style={{
      width: "70px", // Set the desired width
      height: "70px", // Set the desired height
      marginRight: "10px", // Adjust the margin as needed
    }}
  />
);
const OnlineStatusIcon2 = () => (
  <img
    src="https://www.mandsconsulting.com/wp-content/uploads/MS-Logo-Web-H-500x164-White-White.svg" // Replace with the actual path to your icon image
    alt="Online Icon"
    style={{
      width: "800px", // Set the desired width
      height: "800px", // Set the desired height
      marginRight: "10px", // Adjust the margin as needed
    }}
  />
);

function Home() {
  return (
    <>
      <Login />
    </>
  );
}

const NumberText: React.FC<NumberTextProps> = ({ num, text }) => {
  return (
    <Typography className="--mr">
      <h3 className="--color-#030b6b">{num}</h3>
      <p className="--color-#030b6b">{text}</p>
    </Typography>
  );
};

export default Home;
