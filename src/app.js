const getLonAndLat = require('../helperAPIs/getLonAndLat')
const weatherData = require('../helperAPIs/weatherData')
const country = process.argv[2];





  
  
  // if (data) {
  //   weatherData( data.latitude , data.longtitude , (error , data) => {
        //  return data.latitude
    //  } )
  // } else {
  //     console.log("Data Entered have An Error")
//   }
 
//  ) 


getLonAndLat ( country , (error , data) => {
  console.log("ERROR : " , error)
  console.log("DATA  : " , data)

  if (data) {
    weatherData( data.latitude , data.longtitude , (error , data) => {
          console.log("ERROR : " , error)
          console.log("DATA  : " , data)
     } )
  } else {
      console.log("Data Entered have An Error")
  }
 
} ) 

///////////////////////////////////////////////





















const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const path = require("path");
// console.log(partialDirectory)
const hbs = require("hbs");
const { error } = require('console');
app.set("view engine", "hbs");

const viewsDirectory = path.join(__dirname, "../temp1/views");
app.set("views", viewsDirectory);

app.get("/", (req, res) => {
  res.render("index", {
    title: "Welcome to our weather app",
    desc: 'this is the home page',
  });
});

app.get("/weather", (req, res) => {
  // res.render("weather", {
  //   weather: "fine",
  // });
  if (!req.query.address){
    return res.send({
      error:'you must provide a valid address'
    })
  }
  res.send({
    location: req.query.address
  })
});

const partialsDirectory = path.join(__dirname, "../temp1/partials");
hbs.registerPartials(partialsDirectory);

app.listen(port, () => {
  console.log(`Your app is working well on port ${port}`);
});
