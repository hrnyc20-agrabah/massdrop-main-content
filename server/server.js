const app = require('./app.js')
var port = process.env.PORT || 3008

app.listen(port, () => console.log(`server is listening on port ${port}`))

module.exports = app;