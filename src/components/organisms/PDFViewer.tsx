import * as React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { useWindowSize } from "../../hooks/useWindowSize";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.5.207/pdf.worker.min.js`;

type PDFViewerProps = {
  url: string;
  width?: number;
};

const PDFViewer = ({ url, width }: PDFViewerProps) => {
  // const [numPages, setNumPages] = React.useState<number>(0);
  // const [pageNumber, setPageNumber] = React.useState<number>(1);
  const [pages, setPages] = React.useState<Array<number>>([]);
  const windowSize = useWindowSize();

  const onDocumentLoadSuccess = React.useCallback(
    ({ numPages }: pdfjs.PDFDocumentProxy) => {
      let i = 1;
      let pageList = new Array(numPages);
      while (i <= numPages) {
        pageList[i - 1] = i;
        i = i + 1;
      }
      setPages(pageList);
    },
    [pages]
  );

  return (
    <div>
      <Document file={url} onLoadSuccess={onDocumentLoadSuccess}>
        {pages.length > 0 &&
          pages.map((pageNumber) => (
            <Page
              key={pageNumber}
              pageNumber={pageNumber}
              width={windowSize.width}
            />
          ))}
        {/* add loading icon */}
      </Document>
    </div>
  );
};

export default PDFViewer;
