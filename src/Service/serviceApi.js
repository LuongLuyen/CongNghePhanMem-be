const GymModel = require('../Model/gymModel')
const RegisterModel = require('../Model/registerModel')

const findAllGym = async(req,res) => {
    try {
        const data= await GymModel.find()
        return data
    } catch (error) {
        return error
    }
}
const findOne = async(req,res) => {
    try {
        const data= await GymModel.find({id:req.params.id})
        return data[0]
    } catch (error) {
        return error
    }
}
const createPackage = async(req,res) => {
    
    try {
        const { idGoiTap, email, ten,tuoi,chieuCao,canNang} = req.body
        const data = new RegisterModel({ idGoiTap, email, ten,tuoi,chieuCao,canNang})
        data.save(data)
        return data
    } catch (error) {
        return error
    }
    
}
const updatePackage = async(req,res) => {
    try {
        console.log(req.params.id)
        await RegisterModel.updateOne({_id:req.params.id}, req.body)
        const data =req.body
        return data
    } catch (error) {
        return error
    }
}
const deletePackage = async(req,res) => {
    try {
        const id = req.params.id
        await RegisterModel.deleteOne({ _id:id })
        const data= await RegisterModel.find()
        return data
    } catch (error) {
        return error
    }
}
const findAllPackage = async(req,res) => {
    try {
        const data= await RegisterModel.find()
        const package = await GymModel.find()
        let newdata = []
        data.forEach((m)=>{
           let a= package.filter(n=>{
                   return  m.idGoiTap===n.id
            })
            newdata.push([m,...a])
           
        })
        return newdata
    } catch (error) {
        return error
    }
}


module.exports = {
    findAllGym: findAllGym,
    findOne: findOne,
    createPackage: createPackage,
    updatePackage: updatePackage,
    deletePackage: deletePackage,
    findAllPackage: findAllPackage,
}