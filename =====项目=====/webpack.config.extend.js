/**
 * Project's customized Webpack Configuration Extension
 * install react-scripts-rewired
 * ----------------------------------------------------
 *
 *
 * it simply gives you the chance to hook into the default Webpack
 * configuration as it is provided by `create-react-app`, and to
 * change it so to match your project's needs.
 *
 * If you want to check out the default values look into:
 * `./node_modules/marcopeg-react-scripts/config/webpack.config.${env}.js`
 *
 */
const path = require("path");
const webpack = require("webpack");

module.exports = (webpackConfig, env, { paths }) => {
  // here you can extend your webpackConfig at will
  //定义@为绝对路径，如果不执行，则不认识@
  webpackConfig.resolve.alias["@"] = path.resolve("src");

  //将name: false，改为true，可以实现在build后build/static的文件名不是数字
  webpackConfig.optimization.splitChunks = { chunks: "all", name: true };

  let mdLoader = {
    test: /\.md$/,
    use: [
      {
        loader: require.resolve("html-loader")
      },
      {
        loader: require.resolve("markdown-loader"),
        options: {}
      }
    ]
  };
  let exclude = {
    exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/, /\.md$/],
    loader: require.resolve("file-loader"),
    options: {
      name: "static/media/[name].[hash:8].[ext]"
    }
  };

  for (let i in webpackConfig.module.rules) {
    if (webpackConfig.module.rules[i].oneOf) {
      // for(let j in webpackConfig.module.rules[i].oneOf){
      webpackConfig.module.rules[i].oneOf.pop(); //刪除最後一個
      webpackConfig.module.rules[i].oneOf.push(mdLoader);
      webpackConfig.module.rules[i].oneOf.push(exclude);
      // }
    }
  }

  if (process.env.NODE_ENV === "production") {
    webpackConfig.output.publicPath = "/person/";

    for (let i in webpackConfig.plugins) {
      if (webpackConfig.plugins[i].definitions) {
        webpackConfig.plugins[i].definitions["process.env"].PUBLIC_URL = "/person/";
      }

      if (webpackConfig.plugins[i].replacements) {
        webpackConfig.plugins[i].replacements.PUBLIC_URL = "/person/";
      }
    }
  }

  return webpackConfig;
};
