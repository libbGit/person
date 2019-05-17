import React, { Component } from "react";
import { Layout, Menu, Carousel, Icon } from "antd";

import MarkDown from "@/components/markdown/MarkDown";
import cssBaseMarkDown from "@public/markdown/cssPercent.md";

class CssPercent extends Component {
  constructor(props, context) {
    super(props);
  }

  render() {
    return <MarkDown source={cssBaseMarkDown} />;
  }

  componentDidMount() {}
}

export default CssPercent;
