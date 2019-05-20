import React, { Component } from "react";
import { Anchor } from "antd";
import PropTypes from "prop-types";
import $ from "jquery";
// import Markdown from "markdown-to-jsx";
// import "@/assets/css/markdown.scss";

class AnchorArea extends Component {
  constructor(props, context) {
    super(props);

    this.state = {
      anchorArray: []
    };
  }

  render() {
    const { Link } = Anchor;
    console.log("anchorArray", this.state.anchorArray);
    return (
      <div className="anchor-area">
        <Anchor>
          <Link href="#1async" title="Basic demo" />
          <Link href="#2await" title="Static demo" />
          <Link href="#3await" title="API">
            <Link href="#4await" title="Anchor Props" />
          </Link>
        </Anchor>
      </div>
    );
  }

  getAnchorArray = (markdownDom) => {
    let array = [];
    if (markdownDom.find("h1")) {
      let h1 = markdownDom.find("h1");
      for (let i of h1) {
        let h1Item =  {id: $(i).attr("id"), children: [] };
        //$(i).attr("id")  h1的id值
        if (true) {
        }
        array.push(h1Item);
      }
    }
  };

  componentDidMount() {
    setTimeout(() => {
      let markdownDom = $("div.markdown-body");

      let array = this.getAnchorArray(markdownDom);
      console.log("array",array);

      // this.setState({ anchorArray });
    }, 1000);
  }
}

// //为属性指定类型检查
// MarkDown.propTypes = {
//   source: PropTypes.string
// };
// MarkDown.defaultProps = {
//   source: "暂无内容"
// };

export default AnchorArea;
