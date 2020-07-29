const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
	useUnifiedTopology : true,
	useFindAndModify   : false,
	useCreateIndex     : true,
	useNewUrlParser    : true
});