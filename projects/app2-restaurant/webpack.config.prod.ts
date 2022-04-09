import webpackConfig from './webpack.config';
import {Configuration} from 'webpack';

export const prodWebpackConfig: Configuration = {
  ...webpackConfig,
  output: {
    publicPath: 'http://localhost:81/', // production server,
    uniqueName: 'restaurant',
  },
};

export default prodWebpackConfig;
