// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
const axios = require('axios');
const cheerio = require('cheerio')
let cardName = process.argv.slice(2)
// Son+Goku%2C+The+Awakened+Power

// Then run a request with axios to the OMDB API with the movie specified
axios.get("https://www.coolstuffinc.com/ajax_buylist.php?ajaxtype=selectsearchgamename&ajaxdata="+cardName).then(
  function(response) {
    // console.log("The card's data: " + response.data.shtml);
    let giantString = response.data.shtml;
    const $ = cheerio.load(giantString)
    let cardInfoDiv = $(".main-container");
    // console.log($(".main-container")[0].attribs)
    cardInfoDiv.each((key, value) => {
      // If same card with uniquely indicating information, need to dig in children and find set information here
      console.log(value.attribs)

    });
  })
  .catch(function(error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log("---------------Data---------------");
      console.log(error.response.data);
      console.log("---------------Status---------------");
      console.log(error.response.status);
      console.log("---------------Status---------------");
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an object that comes back with details pertaining to the error that occurred.
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    console.log(error.config);
  });
