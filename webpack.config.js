const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const styleLoader = {
    loader: 'style-loader',
    options: {
        sourceMap: true
    }
};
const cssLoader = {
    loader: 'css-loader',
    options: {
        sourceMap: true
    }
};
const sassLoader = {
    loader: 'sass-loader',
    options: {
        sourceMap: true
    }
};
const resolveUrlLoader = {
    loader: 'resolve-url-loader',
    options: {
        sourceMap: true
    }
};
const babelLoader = {
    loader: 'babel-loader',
    options: {
        cacheDirectory: true
    }
};
const reactHotLoader = {
    loader: 'react-hot-loader/webpack',
    options: {
        sourceMap: true
    }
};

const useDevServer = true;
const publicPath = useDevServer ? 'http://localhost:8080/build/' : '/build/';

module.exports = {
    entry: {
        // 'react-hot-loader/patch',
        // 'webpack-dev-server/client?http://localhost:8080/',
        // 'webpack/hot/only-dev-server',
        product: './assets/js/productApp.js',
    },
    output: {
        path: path.resolve(__dirname, 'web', 'build'),
        filename: '[name].js',
        publicPath: publicPath
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    reactHotLoader,
                    babelLoader,
                ]
            },  // reactHotLoader && babelLoader    => transpile js ES6 to ES5
            {
                test: /\.css$/,
                use: [
                    styleLoader,
                    cssLoader,
                ]
            },  // styleLoader && cssLoader         => transpile css
            {
                test: /\.scss$/,
                use: [
                    styleLoader,
                    cssLoader,
                    resolveUrlLoader,
                    sassLoader,
                ]
            },  // resolveUrlLoader & sassLoader    => transpile scss
            {
                test: /\.(png|jpg|jpeg|gif|ico|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name]-[hash:6].[ext]'
                        },
                    }
                ]
            },  // file-loader                      => transpile images
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name]-[hash:6].[ext]'
                        },
                    }
                ]
            }   // file-loader                      => transpile fontawesome
        ]
    },

    plugins: [
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            'window.jQuery': 'jquery',
        }),

        new CopyWebpackPlugin([
            // copies to {output}/static
            { from: './assets/static', to: 'static' }
        ]),

        new webpack.optimize.CommonsChunkPlugin({
            name: [
                // "product" is an entry file
                // anything included in layout, is not included in other output files
                'product',
                // dumps the manifest into a separate file
                'manifest'
            ],
            minChunks: Infinity
        }),

        new HtmlWebpackPlugin({
            title: 'Hot Module Replacement :)'
        })
    ],

    resolve: {
        extensions: [ '.js', '.jsx'],
    },

    devtool: 'inline-source-map',
    devServer: {
        contentBase: './build',
        headers: { 'Access-Control-Allow-Origin': '*' },

    }

    // devServer: {
    //     contentBase: path.join(__dirname, 'web'),
    //     inline: true,
    //     hot: true,
    //     headers: { "Access-Control-Allow-Origin": "*" }
    // }
};