import React, { Component } from "react";
import { Layout, Menu, Row, Col, Card, Icon } from "antd";
import PropTypes from "prop-types";
import { Switch, Route, Link } from "react-router-dom";

import { downloadFile } from "@/util/factory";
import "./mindmap.scss";

import minmapConfig from "@/assets/mind-map/config.json";

class MindMap extends Component {
  constructor(props, context) {
    super(props);
  }

  handlePreviewMindmap = url => {
    downloadFile(url);
  };

  handlePreviewMindmap = url => {
    downloadFile(url);
  };

  render() {
    const { SubMenu } = Menu;
    const { Content, Sider } = Layout;

    let minmaps = minmapConfig.map((item, index) => {
      let url = require(`@/assets/mind-map/${item.url}`);
      let { title, content } = item;

      return (
        <Card
          style={{ height: "173px" }}
          title={title}
          bordered={false}
          key={index}
          actions={[<PreviewIcon type="picture" url={url} />, <DownloadIcon type="download" url={url} />]}
        >
          {content}
        </Card>
      );
    });

    return (
      <div className="main-mindmap">
        <Layout className="mindmap-layout">
          <Content className="mindmap-content">{minmaps}</Content>
        </Layout>
      </div>
    );
  }
}

let PreviewIcon = props => {
  return (
    <a href={props.url} target="_blank" title="预览">
      <Icon type="picture" />
    </a>
  );
};

let DownloadIcon = props => {
  return (
    <a href={props.url} title="下载" download>
      <Icon type="download" />
    </a>
  );
};

export default MindMap;
