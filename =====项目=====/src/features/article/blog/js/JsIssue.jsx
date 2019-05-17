import React, { Component } from "react";

import MarkDown from "@/components/markdown/MarkDown";
import jsIssueMarkDown from "@public/markdown/js-issue.md";

class JsIssue extends Component {
  constructor(props, context) {
    super(props);
  }

  render() {
    return <MarkDown source={jsIssueMarkDown} />;
  }

  componentDidMount() {}
}

export default JsIssue;
