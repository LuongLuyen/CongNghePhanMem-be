const ApiController = require("../Controller/Api/apiGym")
const router = require("express").Router()

router.get('/gym', ApiController.findAllGym)
router.get('/gym/:id', ApiController.findOne)


module.exports = router