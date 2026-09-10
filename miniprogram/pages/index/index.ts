Page({
  data: {
    practiceCount: 0,
    featuredCopybook: "颜勤礼碑"
  },

  startPractice() {
    this.setData({
      practiceCount: this.data.practiceCount + 1
    })
  }
})

