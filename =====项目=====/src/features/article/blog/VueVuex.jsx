import React, { Component } from "react";

import MarkDown from "@/components/markdown/MarkDown";
import vueVuexMarkDown from "@/assets/markdown/vue-vuex.md";

class VueVuex extends Component {
  constructor(props, context) {
    super(props);
  }

  render() {
    return <MarkDown source={vueVuexMarkDown} />;
  }

  componentDidMount() {}
}

export default VueVuex;
