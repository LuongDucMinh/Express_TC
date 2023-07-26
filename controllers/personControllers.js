const persons = require('../models/persons.json')


const getAllPerson = (req,res)=>{
    res.send(persons);
    
}

const deletePerson = (req,res)=>{
    const {username}= req.body 
    res.json({username});
    
}

const updatePerson = (req,res)=>{
    const {username}= req.body 
    res.json({username});
}

const postPerson = (req,res)=>{
    const {username}= req.body 
    res.json({username});
}
module.exports= {getAllPerson,deletePerson,updatePerson,postPerson}