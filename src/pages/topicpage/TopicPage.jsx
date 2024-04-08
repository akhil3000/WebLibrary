import React from "react";
import SkillSet from "./skillsetcomponent/SkillSet";
import BlogCard from "./blogcardcomponent/BlogCard";
import "./TopicPage.css";

function TopicPage({ topic }) {
  return (
    <div className="topic-page">
      <p className="topic-heading">{topic.title}</p>

      <div className="section-container blogs-container">
        {topic.blogs.map(blog => {
          return <BlogCard data={blog} path={topic.path}/>
        })}
      </div>
      <div className="section-container">
        {topic.skillsets.map((skillset) => {
          return <SkillSet skillset={skillset} path={topic.path} />;
        })}
      </div>
    </div>
  );
}

export default TopicPage;
