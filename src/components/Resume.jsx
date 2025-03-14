import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.8.69/pdf.worker.min.mjs`;

const Resume = () => {
    const [numPages, setNumPages] = useState(null);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages((prev) => (prev === numPages ? prev : numPages)); 
    };

    return (
        <div className="resume">
            <Document file="/resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                {numPages &&
                  Array.from({ length: numPages }, (_, index) => (
                      <Page key={index} pageNumber={index + 1} width={window.innerWidth * 0.8} />
                  ))
                }
            </Document>
        </div>
    );
};

export default Resume;
