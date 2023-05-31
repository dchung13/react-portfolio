import React from 'react';

const Resume = () => {
    const myPDF = "./images/david-chung-resume.pdf";
    return (
        <div>
            <h2>Download my Resume</h2>
            <a href={myPDF} download="david-chung-resume.pdf">Download</a>
        </div>
  );
};

export default Resume;