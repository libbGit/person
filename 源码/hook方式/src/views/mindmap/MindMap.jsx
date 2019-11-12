import React, { useContext, useCallback, useEffect } from "react";
import { Layout, Menu, Row, Col, Card, Icon } from "antd";

import minmapConfig from "@/assets/mind-map/config.json";

import "./mindmap.scss";

const { Content } = Layout;

function MindMap() {
  return (
    <div className="main-mindmap">
      <Layout className="mindmap-layout">
        <Content className="mindmap-content">
          <Cards list={minmapConfig} />
        </Content>
      </Layout>
    </div>
  );
}

let Cards = props => {
  return props.list.map((item, index) => {
    let url = require(`@/assets/mind-map/${item.url}`);
    let { title, content } = item;

    return (
      <Card
        style={{ height: "173px" }}
        title={title}
        bordered={false}
        key={index}
        actions={[
          <PreviewIcon type="picture" url={url} />,
          <DownloadIcon type="download" url={url} />
        ]}
      >
        {content}
      </Card>
    );
  });
};

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
