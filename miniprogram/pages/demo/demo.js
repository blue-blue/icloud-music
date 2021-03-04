// pages/demo/demo.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		openid: ''
	},
	formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
	},
	userInfoHandler(e) {
		console.log(e)
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		wx.cloud.callFunction({
			name: 'login'
		}).then((res) => {
			// console.log(res)
			this.setData({
				openid: res.result.openid
			})
		})

		const p1 = new Promise((resolve, reject) => {
			setTimeout(() => {
				console.log(1)
				reject('first error')
			}, 2000)
		})
		const p2 = new Promise((resolve, reject) => {
			setTimeout(() => {
				console.log(2)
				resolve('p2')
			}, 1000)
		})
		const p3 = new Promise((resolve, reject) => {
			setTimeout(() => {
				console.log(3)
				resolve('p3')
			}, 3000)
		})

		// Promise.all([p1,p2,p3]).then((res) => {
		// 	console.log('全部完成')
		// 	console.log(res)
		// }).catch((err) => {
		// 	console.log('失败')
		// 	console.log(err)
		// })

		wx.login({
			success(res) {
				console.log(res)
			},
		})

		wx.getSetting({
			withSubscriptions: false,
			success (res) {
				console.log(res)
			}
		})
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	}
})