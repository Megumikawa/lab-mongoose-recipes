const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';



// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(self => {
    console.log(`Connected to the database: "${self.connection.name}"`);
    // Before adding any documents to the database, let's delete all previous entries
    return self.connection.dropDatabase();
  })

  //Iteration2
  // .then(() => {
  //   Recipe.create(someRecipe)
  //   .then((result) => {
  //     console.log("title",result)
  //   })
  //   .catch(() => {
  //     console.log('Error')
  //   })
  // })
  
  //Iteration3
  // Recipe.insertMany(data)
  // .then(() => {
  //   console.log('multiple recipes created')
  // })
  // .catch(() => {
  //   console.log('Something went wrong while inserting')
  // })

//Iteration4
  // Recipe.findOneAndUpdate( {title: 'Rigatoni alla Genovese '}, {duration: 100} )
  // .then((result) => {
  //   console.log('The duration have have been updating')
  // })
  // .catch(() => {
  //   console.log('Something went wrong while updating')
  // })

// Iteration5
  Recipe.deleteOne({title:'Carrot Cake'})
  .then((result) => {
    console.log('Carrot cake is deleted'.result)
  })

  //Iteration6
  // mongoose.connection.close()

  .catch(() => {
    console.log('Detlete is failed')
  })






  .catch(error => {
    console.error('Error connecting to the database', error);
  });

