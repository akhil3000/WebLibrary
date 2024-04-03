import React from "react";

import { Route, Routes } from "react-router-dom";
import data from "./data.json";
import Home from './pages/homepage/Home'
import MyCourses from './pages/mycoursespage/MyCourses'
import Contribute from './pages/contributepage/Contribute'
import AboutUs from './pages/aboutpage/AboutUs'
import TopicsPage from './pages/topicpage/TopicPage'
import SkillPage from './pages/skillpage/SkillPage'
import BlogPage from "./pages/blogpage/BlogPage";

function AppRoutes() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mycourses" element={<MyCourses />} />
      <Route path="/contribute" element={<Contribute />} />
      <Route path="/aboutus" element={<AboutUs />} />
      {data.map((topic) => {
        return (
          <Route path={topic.path} key={topic.path} element={<TopicsPage topic={topic} />} />
        );
      })}
      {
        data.flatMap((topic) => {
          return topic.blogs.map((blog)=> {
            return (
              <Route path={topic.path + blog.path} key={topic.path + blog.path} element={<BlogPage path={topic.path} data={blog}/>}/>
            )
          })
        })
      }
      {data.flatMap((topic) => {
        return topic.skillsets.flatMap((skillset) => {
          return (skillset.skills.map((skill) => {
            return (
              <Route
                key={topic.path + skillset.path + skill.path}
                path={topic.path + skillset.path + skill.path}
                element={<SkillPage skill={skill} />}
              />
            );
          }));
        });
      })}
    </Routes>
  );
}

export default AppRoutes;
