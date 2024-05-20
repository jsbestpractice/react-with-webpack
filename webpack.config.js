const path = require("path");

module.exports = {
	//مود پروزه  دو حالت میتونه داشته باشه
	mode: "development", //production
	//نقطه شروع کجا باشه
	//entry: './src/index.js',
	entry: path.join(__dirname, "src", "index.js"), //src یک پوشه است  شامل همه فایلهای پروژه ما
	//پوشه src ایجاد میکینم  . شامل index.js
	//output  میشه خروجی ما  که خودش باز یک ابجکته
	output: {
		filename: "main.js",
		path: path.join(__dirname, "dist"), //تو پوشه دیست
	},
	module: {
		// در ارایه  یکسری قوانین تعیین می کنیم
		rules: [
			{
				test: /\.?js$/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env", "@babel/preset-react"], //از این پریست ها استفاده کن
					},
				},
				exclude: "/node_modules", //با این فایلها کاری نداشته باش خودشون باندل شدند
			},
		],
	},
};
// در مرحله بعد باید دیپندسی ها رو نصب کنیم
