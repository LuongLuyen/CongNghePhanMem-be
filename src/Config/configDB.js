const mongoose = require("mongoose")
require('dotenv').config()

mongoose.set("strictQuery", true)
const connectMongoDB = async () => {
	try {
        const uri =`mongodb+srv://${process.env.USERNAME__DB}:${process.env.PASSWORD__DB}@cluster0.l9s2xmj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
		await mongoose.connect(
			uri,
		)
		console.log('[LOG]','MongoDB kết nối thành công')
	} catch (error) {
		console.log("[ERROR]",error.message)
		process.exit(1)
	}
}
module.exports = {
    connectMongoDB: connectMongoDB,
}