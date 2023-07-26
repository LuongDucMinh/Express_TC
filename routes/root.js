const fsPromise = require('fs/promises');
const express= require('express');
const router=express.Router();
const path= require('path')


router.get("/",async (req, res) => {
    const data = await fsPromise.readFile(path.join(__dirname,"..", 'views', 'root.html'), "utf-8"
    )
   res.send(data)
  }) 

  

module.exports= router