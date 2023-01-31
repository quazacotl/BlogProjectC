import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {BuildOptions} from "./types/config";

export function buildPlugins({paths: {html}}: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            template: html
        }),
        new webpack.ProgressPlugin()
    ]
}