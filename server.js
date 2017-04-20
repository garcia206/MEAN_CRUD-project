var express = require('express'),
    bodyParser = require('body-parser'),
    path = require("path"),
    app = express();


var PORT = 8000

app.use(bodyParser.json())

//HERE IS WHERE WE USE ANGULAR
//inside the angular project, go to /src and run: ng build -w
//this will create a dist folder
app.use(express.static(path.join(__dirname, './static/widget-project/dist')));



// must require mongoose first so that it connects to db and requires all models
// so the models can be used in controllers
require("./server/config/mongoose.js")

require("./server/config/routes.js")(app)

app.listen(PORT, function(){
	console.log(`Listening on port ${PORT}`)
})
