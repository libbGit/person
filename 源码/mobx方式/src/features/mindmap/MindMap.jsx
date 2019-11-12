import React, { Component } from "react";
import { Layout, Menu, Row, Col, Card, Icon } from "antd";
import PropTypes from "prop-types";
import { Switch, Route, Link } from "react-router-dom";
import { observer, inject } from "mobx-react";

import { downloadFile } from "@/util/factory";
import "./mindmap.scss";

import minmapConfig from "@/assets/mind-map/config.json";

// @inject('store')
@inject(rootStore => ({ testA: rootStore.store.testA })) //可以直接访问到 store的子模块 testA， testA通过 this.props.testA调用
@inject(rootStore => ({ rootStore: rootStore.store })) //访问 rootStore ， 可以定义多个 inject，注入不同的state
@observer
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
    const { Content } = Layout;
    let { testA } = this.props;
    let { rootStore } = this.props;

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
        {/* {testA.name}== {rootStore.username} */}
        <Layout className="mindmap-layout">
          <Content className="mindmap-content">{minmaps}</Content>
        </Layout>
      </div>
    );
  }

  componentDidMount() {
    this.props.testA.plus(); //调用 testA的 action
    this.props.rootStore.setUserName(); //调用 testA的 action
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
