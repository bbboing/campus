Component({
  data: {
    active: 0,
    list: [
      {
        url: '/pages/index/index',
        icon: 'flower-o',
<<<<<<< HEAD
        text: '首页',
=======
        text: '生活指南',
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
      },
      {
        url: '/pages/subjects-information/index',
        icon: 'notes-o',
<<<<<<< HEAD
        text: '消息',
      },
      {
        url: '/pages/info/index',
        icon: 'apps-o',
        text: '我'
=======
        text: '学科信息',
      },
      {
        url: '/pages/study-guide/index',
        icon: 'apps-o',
        text: '学习指南'
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
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