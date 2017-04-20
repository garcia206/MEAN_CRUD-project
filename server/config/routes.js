// Import all controllers here; controllers have all the logic
// Good idea to have a controller per model
// Example: var animalsController = require("../controllers/animals.js")
var widgetsController = require("./../controllers/widgets.js")


//ROUTES
module.exports = function(app){
  // Show All
	app.get("/widgets", widgetsController.index)

  //Show ONE
  app.get("/widgets/:id", widgetsController.show)
  
  // Create new
  app.post("/widgets", widgetsController.create)

  // update
  app.put("/widgets/:id", widgetsController.update)

  //delete
  app.delete("/widgets/:id", widgetsController.delete)

}