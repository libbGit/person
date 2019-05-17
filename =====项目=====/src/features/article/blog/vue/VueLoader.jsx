import React, { Component } from "react";

import MarkDown from "@/components/markdown/MarkDown";
import vueVuexMarkDown from "@public/markdown/vue-loader.md";

class VueLoader extends Component {
  constructor(props, context) {
    super(props);
  }

  render() {
    return <MarkDown source={vueVuexMarkDown} />;
  }

  componentDidMount() {}
}

export default VueLoader;
