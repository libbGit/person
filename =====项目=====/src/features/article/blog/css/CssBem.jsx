import React, { Component } from "react";
import { Layout, Menu, Carousel, Icon } from "antd";

import MarkDown from "@/components/markdown/MarkDown";
import bemMarkDown from "@public/markdown/cssBem.md";

class CssBem extends Component {
  constructor(props, context) {
    super(props);
  }

  render() {
    return <MarkDown source={bemMarkDown} />;
  }

  componentDidMount() {}
}

export default CssBem;
