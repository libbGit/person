import React, { Component } from "react";
import { Layout, Menu, Carousel, Icon } from "antd";

import MarkDown from "@/components/markdown/MarkDown";
import flexMarkDown from "@/assets/markdown/flex.md";

class CssFlex extends Component {
  constructor(props, context) {
    super(props);
  }

  render() {
    return <MarkDown source={flexMarkDown} />;
  }

  componentDidMount() {}
}

export default CssFlex;
