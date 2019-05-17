import React, { Component } from "react";
import { Layout, Menu, Carousel, Icon } from "antd";

import MarkDown from "@/components/markdown/MarkDown";
import cssBaseMarkDown from "@public/markdown/cssBfc.md";

class CssBfc extends Component {
  constructor(props, context) {
    super(props);
  }

  render() {
    return <MarkDown source={cssBaseMarkDown} />;
  }

  componentDidMount() {}
}

export default CssBfc;
