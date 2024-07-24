// src/components/PDFList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PDFList = () => {
  const [pdfs, setPdfs] = useState([]);

  useEffect(() => {
    fetch('/books/pdfList.json')
      .then(response => response.json())
      .then(data => setPdfs(data))
      .catch(error => console.error('Error fetching PDF list:', error));
  }, []);

  return (
    <div>
      <h1>Available PDFs</h1>
      <ul>
        {pdfs.map((pdf, index) => (
          <li key={index}>
            <Link to={`/read/${pdf}`}>{pdf}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PDFList;
