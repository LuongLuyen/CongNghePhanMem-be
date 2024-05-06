const ApiService = require('../../Service/serviceApi')
const findAllGym = async (req, res) => {
    const data = await ApiService.findAllGym()
    return res.json(data)
}
const findOne = async (req, res) => {
    const data = await ApiService.findOne(req,res)
    return res.json(data)
}

module.exports = {
    findAllGym: findAllGym,
    findOne: findOne,
}