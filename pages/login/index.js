import { featureList } from '../../static/featureList'
const app =  getApp();

Page({
    data: {
        list: [],
    },
    onShow(){
        //this.getTabBar().init();
    },
    onLoad(){
        const { study: list } = featureList;
        this.setData({ list })
    },
    getMyInfo:function(e)
    {
      console.log(e.detail.userInfo)
      app.globalData.userInfo=e.detail.userInfo
      wx.switchTab({
        url:'/pages/info/index'
      })
    }
})