const Product = require("../../model/products.model.BE_24")
const Products1 = require("../../model/products1.model.BE_24")
const fiterStatusHelper = require("../../helper/fiterStatus.js")
const pagination = require("../../helper/pagination.js")

// [GET] /admin/products
module.exports.index = async (req, res) => {
    // tạo ra một mảng các nút bấm
    const fiterStatus = fiterStatusHelper(req.query)


    // tạo ra oject find để lọc sản phẩm 
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

        // console.log(regex)

    }



// pagination phan trang 
  const countProducts = await Products1.countDocuments(find)
  const objectPagination = pagination(req.query,countProducts)
//   end pagination
    const products = await Products1.find(find).limit(objectPagination.limitItem).skip(objectPagination.skip);
    res.render("admin/page/product/index.pug", {
        pageTitleAdmin: "Trang Chủ ",
        products: products,
        fiterStatus: fiterStatus,
        keyword:keyword,
        Pagination:objectPagination
    });

}