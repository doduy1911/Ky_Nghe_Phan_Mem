module.exports = (query) => {
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
    if(query.status){
        // tìm đến object tương ứng 
        const index = fiterStatus.findIndex((item) => {
            return item.status == query.status;
        }) ;
        // cập nhật lại status
        fiterStatus[index].class = "active"
    }else{
        const index = fiterStatus.findIndex((item) => {
            return item.status == "";
        }) ;
        fiterStatus[index].class = "active"
    }
    return fiterStatus;
 
}