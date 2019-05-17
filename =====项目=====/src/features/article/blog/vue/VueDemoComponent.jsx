import React, { Component } from "react";

import MarkDown from "@/components/markdown/MarkDown";
import vueVuexMarkDown from "@public/markdown/vue-demo-component.md";

class VueDemoComponent extends Component {
  constructor(props, context) {
    super(props);
  }

  render() {
    return <MarkDown source={vueVuexMarkDown} />;
  }

  componentDidMount() {}
}

export default VueDemoComponent;
