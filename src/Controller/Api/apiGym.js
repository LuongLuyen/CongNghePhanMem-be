const ApiService = require('../../Service/serviceApi')
const findAllGym = async (req, res) => {
    const data = await ApiService.findAllGym()
    return res.json(data)
}
const findOne = async (req, res) => {
    const data = await ApiService.findOne(req,res)
    return res.json(data)
}
const createPackage = async (req, res) => {
    const data = await ApiService.createPackage(req,res)
    return res.json(data)
}
const findAllPackage = async (req, res) => {
    const data = await ApiService.findAllPackage()
    return res.json(data)
}

const deletePackage = async (req, res) => {
    const data = await ApiService.deletePackage(req,res)
    return res.json(data)
}
const updatePackage = async (req, res) => {
    const data = await ApiService.updatePackage(req,res)
    return res.json(data)
}

module.exports = {
    findAllGym: findAllGym,
    findOne: findOne,
    createPackage: createPackage,
    findAllPackage: findAllPackage,
    deletePackage: deletePackage,
    updatePackage: updatePackage,
}