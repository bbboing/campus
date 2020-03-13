// pages/addNumber/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      username:'',
      password:''
  },
  changePwd:function(e){
    console.log(e.detail);
    this.setData({
      password:e.detail
    })
  },
  changeNum:function(e){
    console.log(e.detail);
    this.setData({
      username:e.detail
    })
  },
  addinfo:function(){
    wx.request({
      url: 'http://authserver.hlju.edu.cn/authserver/login?service=http%3A%2F%2Fmy.hlju.edu.cn%2Flogin.portal',
      data:{
        username:this.data.username,
        password:this.data.password,
        btn:'',
        It: 
        'LT - 444296 -gLyUgg0jXXyx3JZhAorT3zmvU3QuuL1584082603300 - bQTr - cas',
        dllt:'userNamePasswordLogin',
        execution:'e1s2',
        _eventId:'submit',
        rmShown:'1'
      },
      header: {
        'Upgrade-Insecure-Requests': '1' ,// 默认值
        'Cache-Control': 'max-age=0',
        'Accept': 'text / html, application/xhtml+xml,application/xml; q=0.9, image/webp,image/apng, */*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Referer': 'http://authserver.hlju.edu.cn/authserver/login?service=http%3A%2F%2Fmy.hlju.edu.cn%2Flogin.portal',
        'Cookie': 
          'route=f9f5446fa2ff9ef6a61faa15afae5d68;org.springframework.web.servlet.i18n.CookieLocaleResolver.LOCALE=zh_CN;JSESSIONID=g0fS1BnT8sKnJTy69PrxYPpgJo9Vqhhgq_lgSp0XyytdAZ980kZJ!1114818505'},
      method:'POST',
      success(res) {
        console.log(res)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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