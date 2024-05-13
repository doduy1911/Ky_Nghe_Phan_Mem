module.exports.createPost = (req,res) => {
    if(!req.body.title){
        req.flash('error', `Vui Lòng Nhập Tiêu Đề `);
        res.redirect("back");
        return;
} 
    if(!req.body.title.length < 5 ){
    req.flash('error', `Vui lòng nhập tối thiếu 5 kí tự `);
    res.redirect("back");
    return;
}
   

} 