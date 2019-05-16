import React, { Component } from "react";

import MarkDown from "@/components/markdown/MarkDown";
import jsDeepCopyMarkDown from "@/assets/markdown/js-deep-copy.md";

class JsDeepCopy extends Component {
  constructor(props, context) {
    super(props);
  }

  render() {
    return <MarkDown source={jsDeepCopyMarkDown} />;
  }

  componentDidMount() {}
}

export default JsDeepCopy;
