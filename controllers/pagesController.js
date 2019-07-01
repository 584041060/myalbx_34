// 引入fs
// const fs = require('fs')

module.exports.getIndexPage = (req, res) => {
  res.render('index.ejs')
}
module.exports.getListxPage = (req, res) => {
  res.render('list.ejs')
}
module.exports.getDetailPage = (req, res) => {
  res.render('detail.ejs')
}


// 后台页面读取
module.exports.getAdminPage = (req, res) => {
  res.render('admin/index.ejs')
}