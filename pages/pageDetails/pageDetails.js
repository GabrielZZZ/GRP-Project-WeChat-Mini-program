const app = getApp();
var baseUrl = app.globalData.host;
var imageUtil = require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageUrl: '',
    imageUrl2:'',
    imageUrl3:'',
    title: '',
    detail: '',
    page_id: '',
    index: '',
    post_username: '',
    imagewidth: 0,
    imageheight: 0,
    videoUrl: '',
    isShowImage: false,
    isShowVideo: false,
    role: app.globalData.role,
    image2Available: false,
    image3Available: false,

    
    indicatorDots: true,  //小点
    autoplay1: true,  //是否自动轮播
    interval: 3000,  //间隔时间
    duration: 3000,  //滑动时间

    profile_photo: ''
  },
  
  pageEdit: function(e){
    wx.redirectTo({
      url: '../pageUpload/pageUpload',
      success: (result)=>{
        
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },


  imageLoad: function (e) {
    var imageSize = imageUtil.imageUtil(e)
    this.setData({
      imagewidth: imageSize.imageWidth,
      imageheight: imageSize.imageHeight
    })
  },
  showBigger: function (e) {
    var src = e.currentTarget.dataset.src;
    wx.previewImage({
      urls: [src],
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    var that = this;


    that.setData({
      role: app.globalData.role,
      imageUrl: decodeURIComponent(options.imageUrl),
      imageUrl2: decodeURIComponent(options.imageUrl2),
      imageUrl3: decodeURIComponent(options.imageUrl3),
      title: decodeURIComponent(options.title),
      detail: decodeURIComponent(options.detail),
      page_id: decodeURIComponent(options.page_id),
      index: decodeURIComponent(options.index),
      post_username: decodeURIComponent(options.post_username),
      videoUrl: decodeURIComponent(options.videoUrl),
      profile_photo: decodeURIComponent(options.profile_photo),
    })

    if(that.data.imageUrl != 'null'){
      that.setData({
        isShowImage: true
      })

      console.log("isShowImage: "+that.data.isShowImage)
    }

    if (that.data.imageUrl2 != 'null') {
      that.setData({
        image2Available: true
      })

      // console.log("isShowImage: " + that.data.isShowImage)
    }

    if (that.data.imageUrl3 != 'null') {
      that.setData({
        image3Available: true
      })

      // console.log("isShowImage: " + that.data.isShowImage)
    }

    if (that.data.videoUrl != 'null') {
      that.setData({
        isShowVideo: true
      })

      console.log("isShowVideo: "+that.data.isShowVideo)
    }

    // 


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