import * as React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import PDFViewer from "../organisms/PDFViewer";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      position: "fixed",
      width: "100%",
      left: 0,
      top: 0,
      zIndex: 1,
    },
    // content: {
    //   height: "calc(100vh - 64px)",
    // },
  })
);

type PageViewerPageTemplateProps = {
  toolbar: React.ReactElement;
  content: React.ReactElement;
};

const PageViewerPageTemplate = React.forwardRef(
  (
    {
      toolbar,
      content,
    }: PageViewerPageTemplateProps & { children?: React.ReactElement },
    ref: React.Ref<HTMLDivElement>
  ) => {
    const classes = useStyles();
    return (
      <>
        <div className={classes.header}>{toolbar}</div>
        {/* <div className={classes.content} ref={ref}> */}
        <div ref={ref}>{content}</div>
      </>
    );
  }
);

// const PageViewerPageTemplate = ({
//   toolbar,
//   content,
// }: PageViewerPageTemplateProps) => {
//   const classes = useStyles();
//   return (
//     <>
//       {toolbar}
//       <div className={classes.content}>{content}</div>
//     </>
//   );
// };

export default PageViewerPageTemplate;
