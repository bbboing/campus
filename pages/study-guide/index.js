const app =  getApp();

Page({
    data: {
        title: 'study guide',
    },
    onShow(){
        this.getTabBar().init();
    }
})