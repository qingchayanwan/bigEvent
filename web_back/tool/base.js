// 建立统一的端口号
var base_url = 'http://localhost:8000';
// 登录端口号
var USER_LOGIN = base_url + '/admin/login';
// 退出登录端口号
var USER_LOGOUT = base_url + '/admin/logout';
// 获取用户信息端口号
var USER_GETUSER = base_url + '/admin/getuser';
// 获取文章数量统计端口号
var USER_COUNT = base_url + '/admin/article_count';
// 评论统计数量的端口号
var USER_COMMENT = base_url + '/admin/comment_count';
// 月新增文章数
var USER_MONTH = base_url + '/admin/month_article_count';
//各类型文章统计
var USER_ARTICLE = base_url + '/admin/article_category_count';
//月文章访问量
var USER_VISIT = base_url + '/admin/article_category_visit';
//月文章搜索
var USER_SEARCH = base_url + '/admin/search';
//发布文章
var USER_PUBLISH = base_url + '/admin/article_publish';
//文章编辑
var USER_EADIT = base_url + '/admin/article_edit';
//删除文章
var USER_DELETE = base_url + '/admin/article_delete';
//文章类别搜索
var USER_WENZHANGSEARCH = base_url + '/admin/category_search';
//新增类别文章
var USER_ADD = base_url + '/admin/category_add';
//编辑文章类别
var USER_WENZHANGEADIT = base_url + '/admin/category_edit';
//删除文章类别
var USER_WENZHANGDELETE = base_url + '/admin/category_delete';
//文章评论搜索
var USER_PINGLINSEARCH = base_url + '/admin/comment_search';
//评论审核通过
var USER_PASS = base_url + '/admin/comment_pass';
//评论审核不能通过
var USER_REJECT = base_url + '/admin/comment_reject';
//删除评论
var USER_PINGLUNDELETE = base_url + '/admin/comment_delete';
//获取用户信息
var USER_GET = base_url + '/admin/userinfo_get';
//编辑用户信息
var USER_USEREADIT = base_url + '/admin/userinfo_edit';