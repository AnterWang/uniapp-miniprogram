let common = {
	supportWxSDKVersion: '2.1.0',
	// 商户类型
	type: 'merchant',
	whiteList: [

	]
}

let config = {
	development: {
		...common,
		// 正式地址
		// path: 'xxxxxxx',

		// 测试地址
		// path: 'xxxxxxx',

		// 开发地址
		path: 'https://xxxxxxx',

	},
	production: {
		...common,
		// 正式地址
		path: 'https://xxxxxxx',
	}
}

module.exports = config[process.env.NODE_ENV]
