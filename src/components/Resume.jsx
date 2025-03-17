import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";


pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.8.69/pdf.worker.min.mjs`;

const Resume = () => {
    const [numPages, setNumPages] = useState(null);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/resume.pdf";
        link.download = "My_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="resume-container">
            <h2 className="resume-title">My Resume</h2>
            
            <div className="pdf-scrollable">
                <Document file="/resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                    {numPages &&
                        Array.from({ length: numPages }, (_, index) => (
                            <Page key={index} pageNumber={index + 1} className="pdf-page" width={window.innerWidth * 0.6} />
                        ))
                    }
                </Document>
            </div>

            <button className="download-btn" onClick={handleDownload}>Download Resume</button>
        </div>
    );
};

export default Resume;
