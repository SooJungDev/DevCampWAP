//라이브러리  module1
var _= require('lodash');

//애플리케이션 로직 -비지니스 로직 -앱로직 module0 
function component () {
    var element = document.createElement('div');
  
    /* lodash is required for the next line to work */
    element.innerHTML = _.join(['Hello','webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());