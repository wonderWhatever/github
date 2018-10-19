//配置入口 和 出口文件



//这是node.js 引入模块的语法 webpack 是基于node构建的 任何合法的node代码都是支持的
const path = require("path");
var htmlWebpackPlugin = require('html-webpack-plugin');
//注意 只要是插件就一定要放到plugins里面
//作用
//1.会自动的根据指定页面生成一个内存页面
//2.会把打包好的main.JS追加到内存当中去

//通过node中的模块操作向外暴露一个配置对象
module.exports={
    //简化代码 --mode development
    mode: 'development',
    //入口文件 表示用webpack打包哪个文件
    entry: path.join(__dirname,'./src/index.js'),
    //出口文件 代表输出路径
    output:{
        path:path.join(__dirname,'./dist'),
        //表示将打包好的文件叫什么名字
        filename:'main.js'
    },
    plugins:[ // 添加plugins节点配置插件
        new htmlWebpackPlugin({
            template:path.resolve(__dirname, 'src/index.html'),//模板路径
            filename:'index.html'//自动生成的HTML文件的名称
        })
    ],
    //配置所有第三方loader的
    module:{
        //匹配第三方模块的规则
        rules:[
        //处理css文件的loader
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
            {test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
            //limit 后面跟的是字节大小  小于这个字节不会64字符解析 是32位的哈希值 
            //然后 想要使用本来的名字 需要 name=[name].[ext]
            //哈希值可以等同于dna 可以防止图片重名
            //第一个【hash：8】是为了加8位哈希值 防止图片名字本来就相同
            {test: /\.(png|jpg|gif)$/, use: 'url-loader?limit=47149&name=[hash:8][name].[ext]'},
            //exclude 排除项
            //为什么 不排除的话会把nodemodules里面的js全转化
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},
            { test: /\.vue$/, use: 'vue-loader' },

        ]
    },
    resolve: {
    alias: {
      'vue$': 'vue/dist/vue.js'
    }
  }
};
