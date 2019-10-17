// 这里面存放的是一些对文章发布和增删改查的接口封装ajax文件
var wenzhang = {
  // 获取list文件中下拉框里面的内容
  // 一个数据两个页面同时使用
  // 文章增删改查页面的获取数据
  getCate: function(opations) {
    $.ajax({
      url: USER_WENZHANGSEARCH,
      success: opations.callback
    })
  },
  // 用来管理文章部分的添加功能
  addCate: function(opations) {
    $.ajax({
      type: 'post',
      url: USER_ADD,
      data: opations.data,
      success: opations.callback
    })
  },
  // 用来管理删除部分的端口文件
  delCate: function(opations) {
    $.ajax({
      type: 'post',
      url: USER_WENZHANGDELETE,
      data: opations.data,
      success: opations.callback
    })
  },
  // 用来管理用户编辑过的数据提交的端口文件
  editCate: function(opations) {
    $.ajax({
      type: 'post',
      url: USER_WENZHANGEADIT,
      data: opations.data,
      success: opations.callback
    })
  },
  // 用来管理删除文章评论的数据接口
  delPinglun: function(opations) {
    $.ajax({
      url: USER_DELETE,
      data: opations.data,
      success: opations.callback
    })
  }
}