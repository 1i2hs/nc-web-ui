import * as React from "react";
import axios from "axios";

import PageViewerToolbar from "../molecules/PageViewerToolbar";
import PDFViewer from "../organisms/PDFViewer";
import PageViewerPageTemplate from "../templates/PageViewerPageTemplate";

import { debounce } from "../../util";
import { generateFakeURLData } from "../../testData";

const singleFakeURLData = generateFakeURLData(1).all[0];

const PageViewerPage = () => {
  const [contentWidth, setContentWidth] = React.useState<number>(0);
  const contentDivRef = React.useRef<HTMLDivElement>(null);
  // React.useEffect(() => {
  //   const fetchWebPage = async () => {
  //     const { data } = await axios.get("https://www.google.com", {
  //       headers: { "Access-Control-Allow-Origin": "*" },
  //     });
  //     console.log(data);
  //   };
  //   fetchWebPage();
  // }, []);
  // React.useEffect(() => {
  //   function handleResize() {
  //     setContentWidth(
  //       contentDivRef.current?.getBoundingClientRect().width ?? 0
  //     );
  //   }

  //   window.addEventListener("resize", debounce(handleResize, 400));

  //   handleResize();

  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  return (
    <PageViewerPageTemplate
      ref={contentDivRef}
      toolbar={<PageViewerToolbar data={singleFakeURLData} />}
      content={<PDFViewer url={"./sample.pdf"} />}
    />
  );
};

export default PageViewerPage;
