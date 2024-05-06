const GymModel = require('../Model/gymModel')

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


module.exports = {
    findAllGym: findAllGym,
    findOne: findOne,
}