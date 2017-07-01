const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const extractSass = new ExtractTextPlugin({
    filename: "styles/[name].[chunkhash:5].css",
});
const config = {
    context: path.resolve(__dirname, './src'),
    entry: {
        // hotelInfo:'./scripts/hotelInfo.js',
        // ordersSubmit:'./scripts/ordersSubmit.js',
        // selectCoupon:'./scripts/selectCoupon.js',
        // selectBreakfast:'./scripts/selectBreakfast.js',
        // paySuccess:'./scripts/paySuccess.js',
        // hotelDisplay:'./scripts/hotelDisplay.js',
        // hotelComment:'./scripts/hotelComment.js',
         submitComment:'./scripts/submitComment.js',
    },
    output:{
        path: path.resolve(__dirname, './dist'),
        filename: 'scripts/[name]-[chunkhash:5].js',
        //publicPath: 'dist/' 
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                include: /(src)/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.html$/,
                use: [ "html-loader" ]
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader'
                })
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }],
                    fallback: "style-loader",
                    publicPath:"../"              //真是个坑。坑死人了
                })
            },
            {
                test: /\.(png|jpg|gif|svg)$/i,
                use: [
                  'url-loader?limit=100&name=images/[name]-[hash:5].[ext]',
                  'image-webpack-loader'
                ]
            },
        ]
    },
    plugins: [
       // new htmlWebpackPlugin({
       //      filename:'hotelInfo.html',
       //      template:'hotelInfo.html',
       //      inject:'body',  //指定js放那个位子 比如body
       //      minify:{            //压缩
       //          removeComments:false,   //true去掉注释
       //          collapseWhitespace:false  //true去掉空格
       //      },
       //      chunks:['hotelInfo'],   //指定那个js
       // }),
       // new htmlWebpackPlugin({
       //      filename:'ordersSubmit.html',
       //      template:'ordersSubmit.html',
       //      inject:'body',  //指定js放那个位子 比如body
       //      minify:{            //压缩
       //          removeComments:false,   //true去掉注释
       //          collapseWhitespace:false  //true去掉空格
       //      },
       //      chunks:['ordersSubmit'],   //指定那个js
       // }),
       // new htmlWebpackPlugin({
       //      filename:'selectCoupon.html',
       //      template:'selectCoupon.html',
       //      inject:'body',  //指定js放那个位子 比如body
       //      minify:{            //压缩
       //          removeComments:false,   //true去掉注释
       //          collapseWhitespace:false  //true去掉空格
       //      },
       //      chunks:['selectCoupon'],   //指定那个js
       // }),
       // new htmlWebpackPlugin({
       //      filename:'selectBreakfast.html',
       //      template:'selectBreakfast.html',
       //      inject:'body',  //指定js放那个位子 比如body
       //      minify:{            //压缩
       //          removeComments:false,   //true去掉注释
       //          collapseWhitespace:false  //true去掉空格
       //      },
       //      chunks:['selectBreakfast'],   //指定那个js
       // }),
       // new htmlWebpackPlugin({
       //      filename:'paySuccess.html',
       //      template:'paySuccess.html',
       //      inject:'body',  //指定js放那个位子 比如body
       //      minify:{            //压缩
       //          removeComments:false,   //true去掉注释
       //          collapseWhitespace:false  //true去掉空格
       //      },
       //      chunks:['paySuccess'],   //指定那个js
       // }),
       // new htmlWebpackPlugin({
       //      filename:'hotelDisplay.html',
       //      template:'hotelDisplay.html',
       //      inject:'body',  //指定js放那个位子 比如body
       //      minify:{            //压缩
       //          removeComments:false,   //true去掉注释
       //          collapseWhitespace:false  //true去掉空格
       //      },
       //      chunks:['hotelDisplay'],   //指定那个js
       // }),
       //  new htmlWebpackPlugin({
       //      filename:'hotelComment.html',
       //      template:'hotelComment.html',
       //      inject:'body',  //指定js放那个位子 比如body
       //      minify:{            //压缩
       //          removeComments:false,   //true去掉注释
       //          collapseWhitespace:false  //true去掉空格
       //      },
       //      chunks:['hotelComment'],   //指定那个js
       // }),
        new htmlWebpackPlugin({
            filename:'submitComment.html',
            template:'submitComment.html',
            inject:'body',  //指定js放那个位子 比如body
            minify:{            //压缩
                removeComments:false,   //true去掉注释
                collapseWhitespace:false  //true去掉空格
            },
            chunks:['submitComment'],   //指定那个js
       }),
       //转化sass的方法
       extractSass,
    ]
}
module.exports=config;