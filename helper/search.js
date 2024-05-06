module.exports=(query)=>{
    let object_search = {
        keyword:"",
        regex:""
    }

    
    if (query.keyword) {
        keyword=query.keyword

        const regex = new RegExp(keyword,"i")
        find.title = regex

        // console.log(regex)

    }

    return object_search;

}