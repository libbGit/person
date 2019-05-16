import React, { Component } from "react";
import { Layout, Menu, Carousel, Icon } from "antd";

import MarkDown from "@/components/markdown/MarkDown";
import jsEs6AyncMarkDown from "@/assets/markdown/js-es6-aync.md";

class JsEs6Async extends Component {
  constructor(props, context) {
    super(props);
  }

  render() {
    return <MarkDown source={jsEs6AyncMarkDown} />;
  }

  componentDidMount() {}
}

export default JsEs6Async;
