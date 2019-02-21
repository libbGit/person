import React, { Component } from "react";
import { Layout, Menu, Carousel, Icon } from "antd";

import MarkDown from "@/components/markdown/MarkDown";
import layoutMarkDown from "@/assets/markdown/css-layout.md";

class CssScss extends Component {
  constructor(props, context) {
    super(props);
  }

  render() {
    return <MarkDown source={layoutMarkDown} />;
  }

  componentDidMount() {}
}

export default CssScss;
