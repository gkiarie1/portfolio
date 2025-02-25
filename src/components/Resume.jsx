import React, { useState } from "react";
import { Document, Page, pdfjs} from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.12.313/pdf.worker.min.js`;

const Resume = () => {
    const [numPages, setNumPages] = useState(null);

    return (
        <div className="resume">
            <Document
                file={`/resume.pdf?v=${new Date().getTime()}`}
                onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            >
                {numPages &&
                    Array.from(new Array(numPages), (_, index) => (
                        <Page
                            key={index + 1}
                            pageNumber={index + 1}
                            width={window.innerWidth * 0.8}
                        />
                    ))}
            </Document>
        </div>
    );
};

export default Resume;
