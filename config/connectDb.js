const moongose = require ("mongoose");



const connectDB =async ()=>{

    try{
     const res = await   moongose.connect(process.env.DATABASE_URI)
    }

    catch(e){
        console.log(e)
    }
}

module.exports= connectDB