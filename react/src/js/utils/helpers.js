
var axios = require('axios');

/**
 * 
 */
function getPages(){
    return axios.get('http://purencool.local/jsonapi/node/page');
}
  
/**
 * 
 */
function getArticles(){
  return axios.get('http://purencool.local/jsonapi/node/article');
}

/**
 * 
 */
var helpers = {
  serverData: function(username){
    return axios.all([getPages(), getArticles()])
      .then(function(arr){
        console.log(arr);
        return arr;
      })
      .catch(function (error) {
        console.log(error);
      })
  }
}

/**
 * 
 */
module.exports = helpers;