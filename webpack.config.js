const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = ({ mode } = { mode: "production" }) => {
  console.group(`Running... [${mode}]`);
    console.log("Executando projeto Template");
    console.log("Enjoy!");

    console.groupEnd() 

    return {
            mode,
            entry: "./index.js", 
            output: {
                publicPath: "/",
                path: path.resolve(__dirname, "build"),
                filename: "bundled.js"
            },
            plugins: [
                new HtmlWebpackPlugin({
                    template: "./public/index.html"
                }),
            ],
            devServer: {
              open: true
            }
        }
};