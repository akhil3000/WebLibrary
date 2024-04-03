import React from "react";
import "./BlogCard.css";
import { Link } from "react-router-dom";

function BlogCard({ data, path }) {
  return (
    <Link className="blog-link" to={path + data.path}>
      <div className="blog-card">
        <div className="blog-title">{data.title}</div>
      </div>
    </Link>
  );
}

export default BlogCard;
