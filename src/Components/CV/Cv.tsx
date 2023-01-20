import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { AiFillCaretRight, AiFillCaretLeft } from 'react-icons/ai';

import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export const Cv = () => {
  const [numPages, setNumPages] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages);
  }
  return (
    <div>
      <Document file='./CV_joneus.pdf' onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p className='ml-40'>
        <button onClick={(e) => pageNumber > 1 && setPageNumber(pageNumber - 1)}>
          <AiFillCaretLeft />
        </button>
        Page {pageNumber} of {numPages}{' '}
        <button onClick={(e) => pageNumber < 3 && setPageNumber(pageNumber + 1)}>
          <AiFillCaretRight />
        </button>
      </p>
    </div>
  );
};
