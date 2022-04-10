import webpackConfig from './webpack.config';
import {Configuration} from 'webpack';

export const prodWebpackConfig: Configuration = {

  ...webpackConfig,
  output: {
    publicPath: 'http://127.0.0.1:80/', // production server,
    uniqueName: 'home',
  },
  };
  export default prodWebpackConfig;
