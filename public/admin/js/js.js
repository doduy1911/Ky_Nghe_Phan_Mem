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