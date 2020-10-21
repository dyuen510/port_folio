import React from "react";
import Resume from "./images/Resume.pdf";

const ResumePdf = () => {
  return (
    <div>
      <iframe src={Resume} title="title" width="70%" height="800px">
        Press me: <a href={Resume}>Download PDF</a>
      </iframe>
    </div>
  );
};

export default ResumePdf;
