import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";


export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {paths: {entry, build}, mode} = options
    return {
        mode,
        entry,
        output: {
            path: build,
            filename: '[name].[contenthash].js',
            clean: true
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolvers(),
    }
}