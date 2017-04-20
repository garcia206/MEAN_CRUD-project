var mongoose = require("mongoose");
var Widget = mongoose.model("Widget")

module.exports = {
    
    //Show all
    index: function(req ,res){
        Widget.find({}, function(err, myData){
            if (err){
                console.log("ERROR, INDEX ROUTE")
            } else {
                res.json(myData)
            }
        })
    },

    //Show One
    show: function(req, res){
        Widget.findOne({_id:req.params.id}, function(err, myData){
            if (err){
                console.log("Error show()", err)
            } else {
                res.json(myData)
            }
        })
    },
    
    //Create
    create: function(req, res){
      //console.log("WIDGET CONTROLLER")
      Widget.create(req.body, function(err, newDocument){
        if(err){
          console.log("Error adding widget", err)
        } else {console.log("in controller, we have added widget to mongo")}
      })
    },

    //Update
    //Model.update(conditions, updateObject, options, callback); //treated as $set operation(No Overwrite)
    update: function(req, res){
        Widget.update({_id:req.params.id}, req.body, function(err, myData){
            if (err) {console.log("SERVER: WidgetController-Error updating", err);}
            res.json(true)
        })
    },

    //Delete
    delete: function(req, res){
        //console.log("SERVER: Widget-Controller_delete() method")
        Widget.remove({_id:req.params.id}, function(err, myData){
            if(err){console.log("SERVER-WidgetController-Error_delete()", err)}
        })
    },
}
