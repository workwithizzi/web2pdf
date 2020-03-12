import React from "react";
import * as jsPDF from 'jspdf'

function DownloadPDF(props) {
  let content = React.createRef();
  function downloadPDF() {
    const doc = new jsPDF();

    //This will eliminate html which you don't want to convert into pdf.
    const specialElementHandlers = {
      '.doNotInclude': function (element, renderer) {
        return true;
      },
    };

    /**
     * fromHTML(HTML,x,y,settings, callback, margins)
     * HTML: HTML formatted text that is to be rendered into PDF.
     * x-axis (Number): coordinate starting from x (i.e. from left)
     * y-axis (Number): coordinate starting from y (i.e. from top)
     * settings (Object): Optional/ Additional variables .
     */
    doc.fromHTML(content.current.innerHTML, 20, 10, {
      'width': 170,
      'elementHandlers': specialElementHandlers,
    });
    doc.save('file.pdf');
  }

  return (
    <>
      <div id="content" ref={content}>
        {props.children}
      </div>
      <button onClick={downloadPDF}>Download PDF</button>
    </>
  );
}

export default DownloadPDF;
