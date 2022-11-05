let nameManager = require('../index.js')
const generateManagerHtml = function (managerObj) {
 
    return `

    <div>
     <p>Manager Name is ${managerObj.name}</p>
     <p> Manager´s id ${managerObj.id} </p>
     <p> Manager´s email ${managerObj.email}</p>
     <p> Manager´s id ${managerObj.officeNumber} </p>
    
     </div>
`
  }

  module.exports = generateManagerHtml
  
