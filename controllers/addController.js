const db = require('../models')
const User = db.User

const addUser = async(req,res)=>{
    var male = await User.create({
        name:'Pawan',
        lastname:'Verma',
        Mobile:9068936482
    })
    res.send(male.toJSON())
}

const showData = async(req,res)=>{
    var data = await User.findAll({})
    res.status(200).json({data:data})    
}

const showOne = async(req,res)=>{
    var data1 = await User.findOne({
        where : {
            id : req.params.id
        }
    }) 
    res.status(200).json({data:data1})   
}

const postUser = async(req,res)=>{
    var postdata = req.body
    const data = await User.create(postdata)
    res.status(200).json({data:data})
}

const update = async(req,res)=>{
        var updated = req.body
        var data = await User.update(updated,{
            where:{
                id:req.params.id
            }         
    }) 
    res.status(200).json({data:data})  
}

const deleteData = async(req,res)=>{
    var data1 = await User.destroy({
        where : {
            id : req.params.id
        }
    }) 
    res.status(200).json({data:data1})   
}

module.exports = {
    addUser,
    showData,
    showOne,
    deleteData,
    update,
    postUser,
}