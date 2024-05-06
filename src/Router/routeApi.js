const ApiController = require("../Controller/Api/apiGym")
const router = require("express").Router()

router.get('/gym', ApiController.findAllGym)
router.get('/gym/:id', ApiController.findOne)

router.post('/register', ApiController.createPackage)
router.put('/register/:id', ApiController.updatePackage)
router.get('/register', ApiController.findAllPackage)
router.delete('/register/:id',ApiController.deletePackage)


module.exports = router