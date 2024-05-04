const Product = require("../../model/products.model.BE_24")
const Products1 = require("../../model/products1.model.BE_24")
console.log(Products1)
// [GET] /admin/products
module.exports.index = async (req, res) => {
    // tạo ra một mảng các nút bấm
    let fiterStatus = [
        {
            
            name: "Tất Cả",
            status: "",
            class:""
        },
        {
            
            name: "Hoạt Động",
            status: "active",
            class:""
        },
        {
            
            name: "Dừng Hoạt Động ",
            status: "inactive",
            class:""
        }
    ]
// nếu người dùng gửi status lên url
    if(req.query.status){
        // tìm đến object tương ứng 
        const index = fiterStatus.findIndex((item) => {
            return item.status == req.query.status;
        }) ;
        // cập nhật lại status
        fiterStatus[index].class = "active"
    }else{
        const index = fiterStatus.findIndex((item) => {
            return item.status == "";
        }) ;
        fiterStatus[index].class = "active"
    }
 
    let find = {
        deleted: false,
    }
    // console.log(fiterStatus)
    // kiểm tra nếu người dùng gửi status lên thì mới lọc 
    if (req.query.status) {
        find.status = req.query.status

    } 
    let keyword = ""
    if (req.query.keyword) {
        keyword=req.query.keyword

        const regex = new RegExp(keyword,"i")
        find.title = regex

        console.log(regex)

    }


    // lọc 
    const products = await Products1.find(find);
    res.render("admin/page/product/index.pug", {
        pageTitleAdmin: "Trang Chủ ",
        products: products,
        fiterStatus: fiterStatus,
        keyword:keyword
    });

}