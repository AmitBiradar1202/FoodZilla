const mongoose = require('mongoose')
// const mongoDbClient = require("mongodb").MongoClient
const mongoURI = 'mongodb+srv://gofood:gofood@cluster0.ovgtbvc.mongodb.net/gofoodmern?retryWrites=true&w=majority';
// mongodb://<username>:<password>@merncluster-shard-00-00.d1d4z.mongodb.net:27017,merncluster-shard-00-01.d1d4z.mongodb.net:27017,merncluster-shard-00-02.d1d4z.mongodb.net:27017/?ssl=true&replicaSet=atlas-eusy5p-shard-0&authSource=admin&retryWrites=true&w=majority
module.exports = function (callback) {
    mongoose
        .connect(mongoURI, { useNewUrlParser: true ,useUnifiedTopology:true},)
        .then(()=>{console.log("Connected") 
                        const foodCollection = mongoose.connection.db.collection("food_items");
                        foodCollection.find({}).toArray(async function (err, data) {
                                if(err){console.log(err)}
                                else{console.log(data)}
                        })
                        });
    
                }
        
    
    
    

