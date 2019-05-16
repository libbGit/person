import React, { Component } from "react";

import MarkDown from "@/components/markdown/MarkDown";
import mdSource from "@/assets/markdown/pwa-listener.md";

class ReactSimpleTutorial extends Component {
  constructor(props, context) {
    super(props);
  }

  render() {
    return <MarkDown source={mdSource} />;
  }

  componentDidMount() {}
}

export default ReactSimpleTutorial;
