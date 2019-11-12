import React, { useState, useEffect } from "react";

import MarkDown from "@/components/markdown/MarkDown";
import mdSource from "@/assets/markdown/js-deep-copy.md";
import axios from "axios";

function JsDeepCopy() {
  const [url, setUrl] = useState("");

  useEffect(() => {
    //mdSource只是md文件通过loader解析出来的一个url而已
    axios.get(mdSource).then(res => {
      setUrl(res.data);
    });
  });

  return <MarkDown source={url} />;
}

export default JsDeepCopy;
