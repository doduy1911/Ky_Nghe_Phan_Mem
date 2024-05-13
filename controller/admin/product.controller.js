const Product = require("../../model/products.model.BE_24")
const Products1 = require("../../model/products1.model.BE_24")
const fiterStatusHelper = require("../../helper/fiterStatus.js")
const pagination = require("../../helper/pagination.js")
const systemconfig = require("../../config/system.js")

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
        keyword = req.query.keyword

        const regex = new RegExp(keyword, "i")
        find.title = regex

        // console.log(regex)

    }



    // pagination phan trang 
    const countProducts = await Products1.countDocuments(find)
    const objectPagination = pagination(req.query, countProducts)
    //   end pagination
    const products = await Products1.find(find)
        .sort({position: 'desc'})
        // asc là tăng dần và dsc là giảm dần
        .limit(objectPagination.limitItem)
        .skip(objectPagination.skip);
    res.render("admin/page/product/index.pug", {
        pageTitleAdmin: "Trang Chủ ",
        products: products,
        fiterStatus: fiterStatus,
        keyword: keyword,
        Pagination: objectPagination
    });

}   
// [GET] /admin/change-status/products
module.exports.changeStatus = async (req, res) => {
    const status = req.params.status
    const id = req.params.id
    await Products1.updateOne({ _id: id }, { status: status })
    req.flash('info', 'cập nhật trạng thái thành công ');
    res.redirect("back")

} 

module.exports.changeMulti = async (req, res) => {
    const type= req.body.type
    const ids = req.body.ids.split(",")
    switch (type) {
        case "active":
            await Products1.updateMany({_id:{$in:ids}} , {status:type})
            req.flash('info', `Cập Nhật Trạng thái ${ids.length} sản phẩm thành Hoạt Động thành công `);

            break;
        
        case "inactive":
            await Products1.updateMany({_id:{$in:ids}} , {status:type})
            req.flash('info', `Cập Nhật Trạng thái ${ids.length} sản phẩm thành Dừng Hoạt Động thành công `);

            break;
        
        case "delete-all":
            await Products1.deleteMany({_id:{$in:ids}} ,
                 {
                    deleted:true,
                    deleteAt: new Date()
                })
                req.flash('info', `xóa thành công  ${ids.length} sản phẩm `);

            break;
        case "change-position":
            for (const item of ids){
                // console.log(item.split("-"))
                const [id , position] = item.split("-")
                // console.log(position)
                // console.log(id)
                await Products1.updateOne({ _id: id }, { position: position })

            }


        
    }

    res.redirect("back")

  

 
}
// xóa cứng 
module.exports.deleteItem = async (req , res) => {
    const id = req.params.id
    await Products1.deleteOne({ _id: id })
    return res.redirect("back")
}

// xóa mềm 
// module.exports.deleteItem = async (req , res) => {
//     const id = req.params.id
//     await Products1.updateOne({ _id: id },{
//         deleted: true,
//         deletedAt: new Date()
//     })
//     return res.redirect("back")
// }

module.exports.create = async (req , res) => {
    res.render("./admin/page/product/create.pug",{
        pageTitleAdmin: "Tạo Mới Sản Phẩm "
    })
}
// end xóa mềm

module.exports.createPost = async (req, res) => {
    req.body.price = parseInt(req.body.price);
    req.body.discountPercentage = parseInt(req.body.discountPercentage);
    req.body.stock = parseInt(req.body.stock);

    if (req.body.position === "") {
        const countProduct = await Products1.countDocuments();
        req.body.position = countProduct + 1;
    } else {
        req.body.position = parseInt(req.body.position);
    }
    if(req.file && req.file.filename) {
        req.body.thumbnail= `/uploads/${req.file.filename}`;
    }
    const product1 = new Products1(req.body);

    await product1.save();
    req.flash('info', `Thêm Thành Công 1 Sản Phẩm `);
    
    res.redirect("/doduy/product");
};


