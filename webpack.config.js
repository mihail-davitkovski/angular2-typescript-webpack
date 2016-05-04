
// Add WebPack to use the included CommonsChunkPlugin
var webpack = require('webpack');
var node_dir = __dirname + '/node_modules';

var config = {
    addVendor: function (name, path) {
        //bascially tell WebPack when require(‘name’) 
        //is resolved in the code, 
        //it will use the file located in "path"
        this.resolve.alias[name] = path;
        this.module.noParse.push(new RegExp(path));
    },
    // We split the entry into two specific chunks. Our app and vendors. Vendors
    // specify that react should be part of that chunk
    entry: 
    {
        app: ['./index.ts'],
        //vendors: ['polyfills', 'angular2', 'angular2/platform']
        vendors:['polyfills', 'angularCore', 'browser']
        //vendors: ['es6-shim', 'polyfills', 'rxjs', 'angular2']
    },
    // We add a plugin called CommonsChunkPlugin that will take the vendors chunk
    // and create a vendors.js file. As you can see the first argument matches the key
    // of the entry, "vendors"
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', './dist/vendors.js')
    ],
    output: {
        filename: "./dist/bundle.js"
    },
    module: {
        noParse: [],
        loaders: [
            {
                //whenever we try to require something that ends with .tsx it should run the contents of that file through the ts-loader
                //tell webpack to use ts-loader for all *.ts files
                test:  /\.ts?$/,
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
        extensions: ['', '.js', '.ts']
    }
};


config.addVendor('polyfills', node_dir + '/angular2/bundles/angular2-polyfills');
config.addVendor('angularCore', node_dir + '/angular2/core');
config.addVendor('browser', node_dir + '/angular2/platform/browser');

module.exports = config;