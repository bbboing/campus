import { featureList } from '../../static/featureList'
const app = getApp()

Page({
  data: {
    list: [],
  },
  onShow() {
		this.getTabBar().init();
  },
  onLoad(){
      const { subject: list } = featureList;
      this.setData({ list })
  }
})
