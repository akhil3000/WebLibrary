import React from "react";
import Markdown from "react-markdown";
import './BlogPage.css'

function BlogPage({ data }) {
  return (
    <div className="blog-page">
      <div className="blog-container">
        <Markdown className="blog-markdown">{data.content}</Markdown>
      </div>
    </div>
  );
}

export default BlogPage;
