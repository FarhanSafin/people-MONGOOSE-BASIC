const mongoose = require ("mongoose");
mongoose.connect("mongodb://localhost:27017/peopleDB", {useNewUrlParser: true, useUnifiedTopology: true});

//schemaCreate
const peopleSchema = new mongoose.Schema({
    name: String,
    age: Number
});

//modelCreate
const People = mongoose.model("People", peopleSchema);

//add data
const johnson = new People({
    name: "Johnson",
    age: 37
});

const hulk = new People({
    name: "Hulk",
    age: 30
});

const captain = new People({
    name: "Captain",
    age: 34
});
//saving data one by one ----- "johnson.save();"
//saving in bulk(many)
People.insertMany([johnson, hulk, captain], function(err){
    if (err) {
        console.log(err);
    }
    else {
        console.log("Success");
    }
})