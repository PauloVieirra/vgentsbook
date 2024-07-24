import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Configure o worker do PDF
pdfjs.GlobalWorkerOptions.workerSrc = 'https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js';

const Bookv = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const fileUrl = '/books/completo.pdf';

  console.log('File URL:', fileUrl); // Adicione este log

  return (
    <div style={{ height: '750px', position: 'relative' }}>
      <Document
        file={fileUrl}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={console.error} // Adicione esta linha para ver os erros de carregamento
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <div style={{ marginTop: '10px' }}>
        <button
          disabled={pageNumber <= 1}
          onClick={() => setPageNumber(pageNumber - 1)}
        >
          Previous
        </button>
        <span> Page {pageNumber} of {numPages} </span>
        <button
          disabled={pageNumber >= numPages}
          onClick={() => setPageNumber(pageNumber + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Bookv;
