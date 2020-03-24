import React, { useEffect, useState } from "react";
import { Document, Page, PDFViewer } from '@react-pdf/renderer'

const Renderer = (props) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
    setOpen(true);
    return () => setOpen(false);
  }, [open]);

  return (
    <>
      {open && (
        <PDFViewer width={600} height={450}>
          <Document>
            <Page size="A4">{props.children}</Page>
          </Document>
        </PDFViewer>
      )}
    </>
  );
};

export default Renderer;
