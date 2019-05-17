import React, { Component } from "react";
import { Layout, Menu, Carousel, Icon } from "antd";

import MarkDown from "@/components/markdown/MarkDown";
import cssBaseMarkDown from "@public/markdown/cssBase.md";

class CssBase extends Component {
  constructor(props, context) {
    super(props);
  }

  render() {
    return <MarkDown source={cssBaseMarkDown} />;
  }

  componentDidMount() {}
}

export default CssBase;
