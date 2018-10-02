const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    index: path.resolve(__dirname, "src/js/index.js"),
    dashboard: path.resolve(__dirname, "src/js/dashboard.js")
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "js/[name].js"
  },
  devServer: {
    port: 8000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["es2015"]
          }
        }
      },
      {
        test: /\.(jpg|png|gif|woff|eot|ttf|svg|woff2)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 100000
          }
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  plugins: [new ExtractTextPlugin("css/[name].css")]
};
