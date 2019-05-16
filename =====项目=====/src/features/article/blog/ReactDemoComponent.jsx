import React, { Component } from "react";

import MarkDown from "@/components/markdown/MarkDown";
import mdSource from "@/assets/markdown/react-demo-component.md";

class ReactDemoComponent extends Component {
  constructor(props, context) {
    super(props);
  }

  render() {
    return <MarkDown source={mdSource} />;
  }

  componentDidMount() {}
}

export default ReactDemoComponent;
