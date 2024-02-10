import React from 'react';
import Iframe from 'react-iframe'

export default function Frame() {
  return (
    <div>
      <Iframe
        url="./assets/pdfFile.pdf"
        id="pdf-iframe"
        width="450px"
        height="450px"
      />
    </div>
  );
}