import React, { Component } from "react";
import { Layout, Menu, Carousel, Icon } from "antd";

import MarkDown from "@/components/markdown/MarkDown";
import scssMarkDown from "@/assets/markdown/scss.md";

class CssScss extends Component {
  constructor(props, context) {
    super(props);
  }

  render() {
    return <MarkDown source={scssMarkDown} />;
  }

  componentDidMount() {}
}

export default CssScss;
