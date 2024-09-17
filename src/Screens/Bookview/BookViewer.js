import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

const MyPdfViewer = ({ fileUrl }) => {
  return (
    <div style={{display:'flex', height: '100%',  width: '100%', maxWidth:'1130px',padding:'0px'}}>

      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js`}>
        <Viewer fileUrl={fileUrl} />
      </Worker>
    </div>
  );
};

export default MyPdfViewer;
