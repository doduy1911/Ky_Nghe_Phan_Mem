// buton status 
const buttonStatus = document.querySelectorAll("[button-status]")
if(buttonStatus.length > 0) {
    // lấy url hiện tại của trang 
    let url = new URL(window.location.href);
    // console.log(url)
    buttonStatus.forEach(button =>{
        button.addEventListener("click",()=>{
            // bắt sự kiện click cho nut buton
            const status = button.getAttribute("button-status");
            // console.log(status)
            
            if(status != ""){
                url.searchParams.set("status",status)
            }else{
                url.searchParams.delete("status")

            }
            // nối chuỗi url
            
            // Chuyển Hướng trang wed
            window.location.href = url.href
        })
    })
}

// form seach
const formSearch = document.querySelector("#form-search")
if(formSearch){
    let url = new URL(window.location.href);
    formSearch.addEventListener("submit",(e)=>{
        e.preventDefault();
        const value = e.target.elements.keyword.value
        if(value != ""){
            url.searchParams.set("keyword",value)
        } else {
            url.searchParams.delete("keyword");
        }
        window.location.href = url.href

})

    
}


// pagination phân trang 

const buttonPagination = document.querySelectorAll("[button-pagination")
// console.log(buttonPagination)

if(buttonPagination.length > 0) {
   buttonPagination.forEach(button => {
    button.addEventListener("click",()=>{
        // console.log(button)
        const page = button.getAttribute("button-pagination");
        // console.log(page)

        let url = new URL(window.location.href);
        url.searchParams.set("page", page)
        window.location.href = url.href
    })
   })
}
// end pagination phân trang

// change_status (đè method)

const changeStatus =  document.querySelectorAll("[button-change-status")
if(changeStatus.length > 0){
    const formChangeStatus = document.querySelector("#form-change-status")
    const path = formChangeStatus.getAttribute("data-path")
    
    changeStatus.forEach(button => {
        button.addEventListener("click",()=>{
            const statusCurrent = button.getAttribute("data-status")
            const id = button.getAttribute("data-id")

            const statusChange = statusCurrent == "active" ? "inactive" :"active" 
            const action = path + `/${statusChange}/${id}?_method=PATCH`
            formChangeStatus.setAttribute("action",action) 
            formChangeStatus.submit();
        });
    });
}


