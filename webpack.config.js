module.exports = {
	entry: "./entry.js", 
	output: { 
		path: __dirname, //表示使用绝对路径 
		filename: "bundle.js" //输出文件名 
	},
	module: { 
		rules: [ //用于加载一些静态文件夹（css样式，图片之类） 
			{ test: /\.css$/, loader: "style!css" }, 
			{ 
				test: /\.jsx?$/, 
				loader:  'babel-loader', 
				exclude: /node_modules/, //不进行转换的文件，可以提高打包速度 
				query: { 
					cacheDirectory: true, 
					presets: ['react', 'es2015'] 
				} 
			} 
		] 
	} 
};


