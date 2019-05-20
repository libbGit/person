import React, { Component } from "react";
import PropTypes from "prop-types";
import Markdown from "markdown-to-jsx";
import "@/assets/css/markdown.scss";

class MarkDown extends Component {
  constructor(props, context) {
    super(props);
  }

  render() {
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
          {this.props.source}
        </Markdown>
      </div>
    );
  }

  componentDidMount() {}
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

//为属性指定类型检查
MarkDown.propTypes = {
  source: PropTypes.string
};
MarkDown.defaultProps = {
  source: "暂无内容"
};

export default MarkDown;
