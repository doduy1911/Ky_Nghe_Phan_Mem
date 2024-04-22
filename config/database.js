const mongoose = require('mongoose')

module.exports.connect = async ()=>{
    try {
        await mongoose.connect(process.env.URL)
        console.log("Kết Nối Thành Công ")


        
    } catch (error) {
        console.log(error.message)
        
    }
}