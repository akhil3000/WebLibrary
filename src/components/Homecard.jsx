import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./button.css";
import { Link } from "react-router-dom";
const Homecard = ({ path, title }) => {
  const handleClick = () => {
    console.log(path, title);
    toast.success("Added to My Courses.");
  };
  return (
    <div>
      <ToastContainer />
      <Link to={path}>
        <button className="a1">
          {title}
          {
            <button className="a2" onClick={handleClick}>
              Bookmark Course{" "}
            </button>
          }
        </button>
      </Link>
    </div>
  );
};

export default Homecard;
