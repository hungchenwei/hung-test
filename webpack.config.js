// https://webpack.js.org/ 官網
// 其實是一個在 Node.js 環境中執行得程式
// require 是載入套件 node的工具
const path = require("path");
module.exports = {
    // 編譯的模式 mode
    mode: "development", // development開發中 | production上線
    // production 模式下無法除錯(除錯不方便)
    // 程式的進入點 剛好為預設
    entry: "./src/index.js",
    // 編譯完成後輸出的地方
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },

    // 模組的設定
    module: {
        // 載入器的規則
        rules: [
            {
                // 檔名是.css結尾 就使用
                test: /\.css$/,
                // 使用額外的載入器(第三方的程式 要另外安裝)
                //  npm install style-loader css-loader --save-dev
                use: ["style-loader", "css-loader"]
            },
            {
                // 如果載入的檔案式sass 就用下方3個載入器
                test: /\.s[ac]ss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            // {
            //     test: /\.m?js$/,
            //     exclude: /node_modules/,
            //     use: {
            //         loader: "babel-loader",
            //         options: {
            //             presets: ['@babel/preset-env']
            //         }
            //     }
            // }
            {
                test: /\.js$/,
                use: ['babel-loader']
            }
        ]
    }
};