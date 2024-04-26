module.exports.index = (req,res) => {
    res.render("admin/page/dashboard/index.pug",{
        pageTitleAdmin : "Trang Tổng Quan "
    });
   
}