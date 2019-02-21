const path = require('path');

const mode = process.env.NODE_ENV === 'development' ?
  'development' :
  'production';

const base = {
  entry: './src/index.ts',
  devtool: 'source-map',
  mode,

  plugins: [],

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },

  resolve: {
    extensions: [
      '.tsx',
      '.ts',
    ],
  },
};

const nodeConfig = {
  ...base,
  target: 'node',
  output: {
    filename: 'node.js',
    path: path.join(__dirname, 'dist'),
    libraryTarget: 'commonjs',
  },
};

const webConfig = {
  ...base,
  target: 'web',
  output: {
    filename: 'node.js',
    path: path.join(__dirname, 'dist'),
    libraryTarget: 'commonjs',
  },
};

module.exports = [
  nodeConfig,
  webConfig,
];
