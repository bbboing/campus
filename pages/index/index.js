//index.js
//获取应用实例
import { featureList } from '../../static/featureList'
const app = getApp()

Page({
  data: {
    list: [{},],
    active: 0,
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  getMap:function(){
    let plugin = requirePlugin('routePlan');
    let key = '2X2BZ-2IKKS-2GTOG-6RUJ3-6EWLT-ESF43';  //使用在腾讯位置服务申请的key
    let referer = 'i黑大';   //调用插件的app的名称
    let endPoint = JSON.stringify({  //终点
      'name': '黑龙江大学',
      'latitude': 45.714492,
      'longitude': 126.625392
    });
    wx.navigateTo({
      url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint
    });
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    const { life: list } = featureList;
    this.setData({ list })
    wx.getLocation({
      success: res => {
        this.setData({
          latitude: res.latitude,
          longitude: res.longitude,
        })
      }
    })
  },
  onShow() {
		this.getTabBar().init();
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onClick(e){
    const { target: { offsetTop: offset = null} = {} } = e
    wx.openLocation({
      latitude: this.data.latitude,
      longitude: this.data.longitude,
    })
    // console.log(latitude,longitude)
    // if(offset%74==0){
    //   wx.createMapContext();
    // }
  }
})
