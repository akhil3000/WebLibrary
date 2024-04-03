import React from "react";
import "./ResourceCard.css";

function ResourceCard({ data }) {
  const domainName = data.link.match(
    /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+)/im
  )[1];
  const baseURL = data.link.match(/^(.*:\/\/[^\/?#]*).*$/)[1];

  const imageUrl = data.ogData.imageUrl
    ? data.ogData.imageUrl
    : data.ogData.favicon;
  const siteName = data.ogData.siteName ? data.ogData.siteName : domainName;
  const favicon = data.ogData.favicon
    ? data.ogData.favicon
    : baseURL + "favicon.ico";
  const title = data.ogData.title ? data.ogData.title : data.title;

  return (
    <a className="resource-link"  rel="noreferrer" href={data.link} target="_blank">
      <div className="resource-card">
        <img src={imageUrl} alt={siteName} className="resource-image" />
        <div className="resource-content">
          <div className="resource-site-info">
            <img src={favicon} className="site-favicon" />
            <p className="site-name">{siteName}</p>
          </div>
          <p className="resource-title">{data.title}</p>
          <p className="resource-description">{data.ogData.description}</p>
        </div>
      </div>
    </a>
  );
}

export default ResourceCard;
