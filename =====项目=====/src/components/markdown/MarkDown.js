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
        <Markdown className="markdown-body" options={{ forceBlock: true }}>
          {this.props.source}
        </Markdown>
      </div>
    );
  }

  componentDidMount() {}
}

//为属性指定类型检查
MarkDown.propTypes = {
  source: PropTypes.string
};
MarkDown.defaultProps = {
  source: "暂无内容"
};

export default MarkDown;
