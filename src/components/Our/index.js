import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Our = ({ Image, title, description, description2 }) => {
  return (
    <div className="works_card">
      <div className="imagee">
        <img src={Image} alt="works_img" className="works_img" loading='lazy'/>
      </div>
      <h3 className="works_title">{title}</h3>
      <Link className="works_description">{description}</Link>
      <Link className="works_description">{description2}</Link>
    </div>
  );
};

export default Our;
