// 这个文件里面主要是存放ajax的请求集
var user = {
  // 管理登录页面的数据请求
  login: function(opations) {
    $.ajax({
      type: 'post',
      url: USER_LOGIN,
      data: opations.data,
      success: opations.callback
    })
  },
  //   退出登录的数据请求
  logout: function(opations) {
    $.ajax({
      type: 'post',
      url: USER_LOGOUT,
      success: opations.callback
    })
  },
  // 获取用户信息
  getIn: function(opations) {
    $.ajax({
      url: USER_GETUSER,
      success: opations.callback
    })
  },
  //   获取用户的个人具体信息
  getAllin: function(opations) {
    $.ajax({
      url: USER_GET,
      success: opations.callback
    })
  },
  // 编辑用户修改过的信息
  userEadit: function(opations) {
    $.ajax({
      type: 'post',
      url: USER_USEREADIT,
      data: opations.data,
      contentType: false,
      processData: false,
      success: opations.callback
    })
  }
}