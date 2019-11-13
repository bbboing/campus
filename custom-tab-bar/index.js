Component({
  data: {
    active: 0,
    list: [
      {
        url: '/pages/index/index',
        icon: 'flower-o',
        text: '生活指南',
      },
      {
        url: '/pages/subjects-information/index',
        icon: 'notes-o',
        text: '学科信息',
      },
      {
        url: '/pages/study-guide/index',
        icon: 'apps-o',
        text: '学习指南'
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