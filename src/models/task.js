const mongoose = require('mongoose')

const taskScheme = new mongoose.Schema({
	description: {
		type: String,
		required: [true, 'Please enter a todo ^__^'],
		trim: true
	},
	completed: {
		type: Boolean,
		default: false
	},
	owner: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'User'
	}
},{
	timestamps: true
})

// 'save' runs on all save conditions || taskScheme.pre(['findOneAndUpdate']) also works
taskScheme.pre('save', async function (next) {
	console.log('Task Middleware ^__^')
	next()
})

const Task = mongoose.model('Task', taskScheme)

module.exports = Task