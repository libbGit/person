import React, { Component } from "react";

import MarkDown from "@/components/markdown/MarkDown";
import mdSource from "@/assets/markdown/css-layout.md";
import axios from "axios";

class CssLayout extends Component {
  constructor(props, context) {
    super(props);
    this.state = {
      markdown: ""
    };
  }

  render() {
    return <MarkDown source={this.state.markdown} />;
  }

  componentDidMount() {
    axios.get(mdSource).then(res => {
      this.setState({ markdown: res.data });
    });
  }
}

export default CssLayout;
