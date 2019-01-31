const path = require('path');
const webpack = require('webpack');
const PnpWebpackPlugin = require('pnp-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const safePostCssParser = require('postcss-safe-parser');
const ManifestPlugin = require('webpack-manifest-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const ModuleNotFoundPlugin = require('react-dev-utils/ModuleNotFoundPlugin');
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');
const config = require('./config');

const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';

const defaultEnv = {
  production: true,
};

module.exports = (env = defaultEnv) => {
  const isEnvDevelopment = !env.production;

  const isEnvProduction = !isEnvDevelopment;

  const publicPath = '/';

  return {
    mode: isEnvProduction ? 'production' : isEnvDevelopment && 'development',
    bail: isEnvProduction,
    // eslint-disable-next-line no-nested-ternary
    devtool: isEnvProduction ? (shouldUseSourceMap ? 'source-map' : false) : isEnvDevelopment && 'eval-source-map',
    entry: [isEnvDevelopment && require.resolve('react-dev-utils/webpackHotDevClient'), './src/index.jsx'].filter(
      Boolean
    ),
    output: {
      path: isEnvProduction ? path.resolve('./build') : undefined,
      pathinfo: isEnvDevelopment,
      filename: isEnvProduction ? 'static/js/[name].[chunkhash:8].js' : isEnvDevelopment && 'static/js/bundle.js',
      chunkFilename: isEnvProduction
        ? 'static/js/[name].[chunkhash:8].chunk.js'
        : isEnvDevelopment && 'static/js/[name].chunk.js',
      publicPath: config.get('PUBLIC_URL') || publicPath,
    },
    devServer: {
      contentBase: path.join(__dirname, 'build'),
      host: config.get('DEV_SERVER_HOST'),
      port: config.get('DEV_SERVER_PORT'),
      proxy: {
        '/api': config.get('API_URL'),
      },
      hot: true,
      compress: true,
      historyApiFallback: true,
    },
    optimization: {
      minimize: isEnvProduction,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            parse: {
              ecma: 8,
            },
            compress: {
              ecma: 5,
              warnings: false,
              comparisons: false,
              inline: 2,
            },
            mangle: {
              safari10: true,
            },
            output: {
              ecma: 5,
              comments: false,
              ascii_only: true,
            },
          },
          parallel: true,
          cache: true,
          sourceMap: shouldUseSourceMap,
        }),
        new OptimizeCSSAssetsPlugin({
          cssProcessorOptions: {
            parser: safePostCssParser,
            map: shouldUseSourceMap
              ? {
                  inline: false,
                  annotation: true,
                }
              : false,
          },
        }),
      ],
    },
    resolve: {
      plugins: [PnpWebpackPlugin, new ModuleScopePlugin('./src', ['./package.json'])],
      extensions: ['*', '.mjs', '.js', '.jsx', '.vue', '.json', '.gql', '.graphql'],
    },
    // resolveLoader: {
    //   plugins: [PnpWebpackPlugin.moduleLoader(module)],
    // },
    module: {
      strictExportPresence: true,
      rules: [
        // Disable require.ensure as it's not a standard language feature.
        { parser: { requireEnsure: false } },
        {
          test: /\.mjs$/,
          include: /node_modules/,
          type: 'javascript/auto',
        },
        {
          test: /\.(js|jsx|mjs)$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-transform-runtime', 'react-hot-loader/babel'],
            },
          },
        },
        {
          test: /\.css$/,
          use: [
            isEnvDevelopment && require.resolve('style-loader'),
            isEnvProduction && {
              loader: MiniCssExtractPlugin.loader,
              options: Object.assign({}, { publicPath: '../../' }),
            },
            {
              loader: require.resolve('css-loader'),
              options: {
                importLoaders: 1,
                sourceMap: isEnvProduction && shouldUseSourceMap,
                modules: true,
                getLocalIdent: getCSSModuleLocalIdent,
              },
            },
            {
              loader: require.resolve('postcss-loader'),
              options: {
                ident: 'postcss',
                plugins: () => [
                  // eslint-disable-next-line global-require
                  require('postcss-flexbugs-fixes'),
                  // eslint-disable-next-line global-require
                  require('postcss-preset-env')({
                    autoprefixer: {
                      flexbox: 'no-2009',
                    },
                    stage: 3,
                  }),
                ],
                sourceMap: isEnvProduction && shouldUseSourceMap,
              },
            },
          ].filter(Boolean),
          sideEffects: true,
        },
        {
          test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
          loader: require.resolve('url-loader'),
          options: {
            limit: 10000,
            name: 'static/media/[name].[hash:8].[ext]',
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: config.get('APP_TITLE'),
        template: path.resolve('src', 'index.ejs'),
      }),
      new ModuleNotFoundPlugin('.'),
      new webpack.EnvironmentPlugin({
        NODE_ENV: process.env.NODE_ENV,
        API_URL: config.get('API_URL'),
      }),
      isEnvDevelopment && new webpack.HotModuleReplacementPlugin(),
      isEnvDevelopment && new CaseSensitivePathsPlugin(),
      isEnvDevelopment && new WatchMissingNodeModulesPlugin('./node_modules'),
      isEnvProduction &&
        new MiniCssExtractPlugin({
          filename: 'static/css/[name].[contenthash:8].css',
          chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
        }),
      new ManifestPlugin({
        fileName: 'asset-manifest.json',
        publicPath,
      }),
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      isEnvProduction &&
        new WorkboxWebpackPlugin.GenerateSW({
          clientsClaim: true,
          exclude: [/\.map$/, /asset-manifest\.json$/],
          importWorkboxFrom: 'cdn',
          navigateFallback: '/index.html',
          navigateFallbackBlacklist: [new RegExp('^/_'), new RegExp('/[^/]+\\.[^/]+$')],
        }),
    ].filter(Boolean),
    performance: {
      hints: isEnvProduction ? 'warning' : false,
    },
  };
};
