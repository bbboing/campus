Component({
  data: {
    active: 0,
    list: [
      {
        url: '/pages/index/index',
        icon: 'flower-o',
        text: '首页',
      },
      {
        url: '/pages/subjects-information/index',
        icon: 'notes-o',
        text: '消息',
      },
      {
        url: '/pages/info/index',
        icon: 'apps-o',
        text: '我'
      }
    ]
  },
  methods: {
    onChange(event) {
      this.setData({ active: event.detail });
      wx.switchTab({
        url: this.data.list[event.detail].url
      });
    },

		init() {
			const page = getCurrentPages().pop();
			this.setData({
				active: this.data.list.findIndex(item => item.url === `/${page.route}`)
			});
		}
  }
})