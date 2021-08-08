const path = require('path')
const VueLoaderPlugin = require('vue-loader-v16/dist/plugin.js').default
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
 entry: path.resolve(__dirname, './src/main.js'),
 output: {
  path: path.resolve(__dirname, 'dist'),
  filename: 'bundle.js',
 },
 resolve: {
  extensions: [".tsx",".ts",".js"],
 },
 module: {
  rules: [
    {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
    },
   {
    test: /\.js$/,
    use: ['babel-loader'],
    exclude: /node_modules/,
   },
   {
    test: /\.css$/,
    use: [
     'style-loader',
     'css-loader',
     {
      loader: 'px2rem-loader',
      options: {
       remUnit: 37.5,
      },
     },
     {
      loader: 'postcss-loader',
      options: {
       sourceMap: true,
       postcssOptions: {
        path: 'postcss.config.js',
       },
      },
     },
    ],
   },
   {
    test: /\.(png|svg|jpg|gif)$/,
    use: ['file-loader'],
   },
   {
    test: /\.(woff|woff2|eot|ttf|otf)$/,
    use: ['file-loader'],
   },
   {
    test: /\.vue$/,
    loader : 'vue-loader-v16'
   }
  ],
 },
 optimization: {
  minimize: true,
 },
 plugins: [
  new HtmlWebpackPlugin({
   template: path.resolve(__dirname, './index.html'),
   inject: 'body',
  }),
  new VueLoaderPlugin()
 ],
}