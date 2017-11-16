
// Add WebPack to use the included CommonsChunkPlugin
var webpack = require('webpack');
var node_dir = __dirname + '/node_modules';
const path = require('path');

var config = {
    // We split the entry into two specific chunks. Our app and vendors. Vendors
    // specify that react should be part of that chunk
    entry:
    {
        app: ["./main.ts"],
        vendors: [
            "@angular/core",
            "@angular/common",
            "@angular/compiler",
            "@angular/forms",
            "@angular/platform-browser",
            "@angular/platform-browser-dynamic",
            "@angular/router",
            "@ngrx/store",
            "core-js",
            "rxjs",
            "zone.js"
            ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
    },
    // We add a plugin called CommonsChunkPlugin that will take the vendors chunk
    // and create a vendors.js file. As you can see the first argument matches the key
    // of the entry, "vendors"
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendors', filename: 'vendors.js' })
    ],
    module: {
        rules: [
            {
                //whenever we try to require something that ends with .tsx it should run the contents of that file through the ts-loader
                //tell webpack to use ts-loader for all *.ts files
                test: /\.ts?$/,
                loader: 'ts-loader',
                exclude: '/node_modules/'
            }
        ]
    },
    // The resolve.alias object takes require expressions
    // (require('react')) as keys and filepath to actual
    // module as values
    resolve: {
        alias: {},
        // you can now require('file') instead of require('file.ts')
        extensions: ['.js', '.ts']
    },
    watch:true
};

module.exports = config;