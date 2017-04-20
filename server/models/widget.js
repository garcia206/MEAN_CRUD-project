var mongoose = require("mongoose")

var WidgetSchema = new mongoose.Schema({
	name: String,
    price: Number},
    {timestamps: true})

mongoose.model("Widget", WidgetSchema)
