// buton status 
const buttonStatus = document.querySelectorAll("[button-status]")
if (buttonStatus.length > 0) {
    // lấy url hiện tại của trang 
    let url = new URL(window.location.href);
    // console.log(url)
    buttonStatus.forEach(button => {
        button.addEventListener("click", () => {
            // bắt sự kiện click cho nut buton
            const status = button.getAttribute("button-status");
            // console.log(status)

            if (status != "") {
                url.searchParams.set("status", status)
            } else {
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
if (formSearch) {
    let url = new URL(window.location.href);
    formSearch.addEventListener("submit", (e) => {
        e.preventDefault();
        const value = e.target.elements.keyword.value
        if (value != "") {
            url.searchParams.set("keyword", value)
        } else {
            url.searchParams.delete("keyword");
        }
        window.location.href = url.href

    })


}


// pagination phân trang 

const buttonPagination = document.querySelectorAll("[button-pagination")
// console.log(buttonPagination)

if (buttonPagination.length > 0) {
    buttonPagination.forEach(button => {
        button.addEventListener("click", () => {
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

const changeStatus = document.querySelectorAll("[button-change-status")
if (changeStatus.length > 0) {
    const formChangeStatus = document.querySelector("#form-change-status")
    const path = formChangeStatus.getAttribute("data-path")

    changeStatus.forEach(button => {
        button.addEventListener("click", () => {
            const statusCurrent = button.getAttribute("data-status")
            const id = button.getAttribute("data-id")

            const statusChange = statusCurrent == "active" ? "inactive" : "active"
            const action = path + `/${statusChange}/${id}?_method=PATCH`
            formChangeStatus.setAttribute("action", action)
            formChangeStatus.submit();
        });
    });
}

// checkbox multi
// FE bắt các checkbox
const checkboxmulti = document.querySelector("[checkbox-multi]")
// console.log(checkboxmulti)
// dùng checked để check cho các checkbox 

if (checkboxmulti) {
    const inputcheckall = checkboxmulti.querySelector("input[name='checkall']")
    const inputID = checkboxmulti.querySelectorAll("input[name='id']")
    inputcheckall.addEventListener("click", () => {
        if (inputcheckall.checked) {
            inputID.forEach(input => {
                input.checked = true
            })
        } else {
            inputID.forEach(input => {
                input.checked = false
            })
        }
    })

    inputID.forEach(input => {
        input.addEventListener("click", () => {
            const countChecked = checkboxmulti.querySelectorAll("input[name='id']:checked").length;
            if (countChecked == inputID.length) {
                inputcheckall.checked = true;

            } else {
                inputcheckall.checked = false;
            }
            // console.log(countChecked)
        })
    })
}

// end checkbox multi
// form-change-multi
const formChangeMulti = document.querySelector("[form-change-multi]")
if(formChangeMulti){
    formChangeMulti.addEventListener("submit", (e) =>{
        // dùng preventDefault để ngăn chặn sự kiện mặc định của form để không bị load lại form 
        e.preventDefault()
        const checkboxmulti = document.querySelector("[checkbox-multi]")
        const inputChecked = checkboxmulti.querySelectorAll("input[name='id']:checked");
        if(inputChecked.length){
            let ids = [];
            const inputIds = formChangeMulti.querySelector("input[name='ids']")

            inputChecked.forEach(input => {
                ids.push(input.value)
            })
            // console.log(ids)
            inputIds.value = ids.join(",")

            formChangeMulti.submit()

        }else{
            alert("Vui lòng chọn it nhất 1 bản ghi")
        }

    })
}
// end form-change-multi

// xóa cứng 
const buttonDelete = document.querySelectorAll("[button-delete]")
if(buttonDelete.length > 0){
    const formDleteitem = document.querySelector("#form-delete-item")
    const path = formDleteitem.getAttribute("data-path")
    buttonDelete.forEach(button => {
        button.addEventListener("click",() => {
            const checkDelete = confirm("Bạn có chắc muốn xóa không ? ")
            if(checkDelete){
                const id = button.getAttribute("data-id");
            const action = path + `/${id}?_method=DELETE`;
            formDleteitem.setAttribute("action",action)
            formDleteitem.submit();
            }

        } )
    })
    

}

// end xóa cứng 
