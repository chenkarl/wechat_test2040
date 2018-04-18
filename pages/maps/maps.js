// pages/maps/maps.js
Page({

  /**
   * 页面的初始数据
   */
  data: {   
    // lat:23, 
    // lon:13
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var latitude
    var longitude
    wx.getLocation({
      success: function (res) {
        latitude = res.latitude
        longitude = res.longitude
        console.info("lat1+" + latitude)
        console.info("lon1+" + longitude)
        lat: latitude
        lon: longitude
        console.info("lat1+" + lat)
        console.info("lon1+" + lon)
      },
    })
    this.setData({
      lat: latitude,
      lon: longitude
    })
    console.info("lat+" + latitude)
    console.info("lon+" + longitude)
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