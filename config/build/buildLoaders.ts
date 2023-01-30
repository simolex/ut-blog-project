import { RuleSetRule } from "webpack";
import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildLoaders(options: BuildOptions): RuleSetRule[] {
  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      options.isDev ? "style-loader" : MiniCssExtractPlugin.loader, // Creates `style` nodes from JS strings
      {
        loader: "css-loader", // Translates CSS into CommonJS
        options: {
          modules: true,
        },
      },
      "sass-loader", // Compiles Sass to CSS
    ],
  };

  // для js  нужен babel-loader
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [typescriptLoader, scssLoader];
}
