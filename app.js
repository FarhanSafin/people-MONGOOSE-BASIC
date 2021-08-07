const mongoose = require ("mongoose");
mongoose.connect("mongodb://localhost:27017/peopleDB", {useNewUrlParser: true, useUnifiedTopology: true});

//schemaCreate
//adding validator...w/o name cannt entry..age limitation
const peopleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter a name!"]
    },
    age: {
        type: Number,
        min: 0,
        max: 100
    }
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


/* //saving data one by one ----- "johnson.save();"
//saving in bulk(many)
People.insertMany([johnson, hulk, captain], function(err){
    if (err) {
        console.log(err);
    }
    else {
        console.log("Success");
    }
}); */


//finding/reading all data from database
People.find(function(err, peoples){
    if(err){
        console.log(err);
    } else{
        console.log(peoples);
    }
});


//finding/reading specific data from database
People.find(function(err, peoples){
    if(err){
        console.log(err);
    } else{


        //closing mongoose database connection
        mongoose.connection.close();


        peoples.forEach(function(people){
            console.log(people.name);
        })
    }
});

//Updating DATA
People.updateOne({_id:"610e007f69088b24a887d233"}, {name:"Salim"}, function(err){
    if(err){
        console.log(err);
    }else{
        console.log("Updated");
    }
})

//deleting data
People.deleteOne({name: "Johnson"}, function(err){
    if(err){
        console.log(err)
    }else{
        console.log("Deleted successfully");
    }
});


//delete Many
People.deleteMany({name: "Hulk"}, function(err){
    if(err){
        console.log(err);
    } else{
        console.log("Successfully deleted all HULK");
    }
});