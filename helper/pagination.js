module.exports =  (query,countProducts)=>{
    // let find = {
    //     deleted: false,
    // }
    let objectPagination = {
        currentpage: 1,
        limitItem: 4
      }
    
      if(query.page){
        objectPagination.currentpage = parseInt(query.page)
    
      }
    
      objectPagination.skip=(objectPagination.currentpage - 1) * objectPagination.limitItem
    // đếm số sản phẩm có trong db
      
    // const countProducts = await Products1.countDocuments(find)
    objectPagination.totalPage = Math.ceil(countProducts / objectPagination.limitItem)

    return objectPagination;
    
}