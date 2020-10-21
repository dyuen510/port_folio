import React from "react";
import Resume from "./images/Resume.pdf";
import "./Resume.css";

const ResumePdf = () => {
  return (
    <div>
      <iframe src={Resume} title="title">
        Press me: <a href={Resume}>Download PDF</a>
      </iframe>
    </div>
  );
};

export default ResumePdf;
