const app = require('./app')
const port = process.env.PORT || 3001

app.listen(port, (error) => {
	console.log('Server is up on PORT:', port)
	console.log('DEV:', `http://localhost:${port}`)
})