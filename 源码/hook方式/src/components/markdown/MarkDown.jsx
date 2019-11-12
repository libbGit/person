import React from "react";
import Markdown from "markdown-to-jsx";
import "@/assets/css/markdown.scss";

function MarkDown(props) {
  return (
    <div>
      <Markdown
        className="markdown-body"
        options={{
          forceBlock: true,
          overrides: {
            h1: {
              component: MyH1
            },
            h2: {
              component: MyH2
            },
            h3: {
              component: MyH3
            },
            h4: {
              component: MyH4
            },
            h5: {
              component: MyH5
            },
            h6: {
              component: MyH6
            }
          }
        }}
      >
        {props.source}
      </Markdown>
    </div>
  );
}

const MyH1 = ({ children, ...props }) => (
  <h1 {...props} id={children}>
    {children}
  </h1>
);
const MyH2 = ({ children, ...props }) => (
  <h2 {...props} id={children}>
    {children}
  </h2>
);
const MyH3 = ({ children, ...props }) => (
  <h3 {...props} id={children}>
    {children}
  </h3>
);
const MyH4 = ({ children, ...props }) => (
  <h4 {...props} id={children}>
    {children}
  </h4>
);
const MyH5 = ({ children, ...props }) => (
  <h5 {...props} id={children}>
    {children}
  </h5>
);
const MyH6 = ({ children, ...props }) => (
  <h6 {...props} id={children}>
    {children}
  </h6>
);

export default MarkDown;
